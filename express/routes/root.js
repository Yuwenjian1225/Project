// 文件：root.js  
// 初始版本由余文建在 2023-03-21 创建，该项功能为管理员的对应路由操作

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient.create({ host: '127.0.0.1', port: '5001', protocol: 'http' });
const fs = require('fs');
const multer = require('multer');

//使用 multer库设置文件上传的存储方式
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images') // 确保这个文件夹已经存在
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})
const upload = multer({ storage: storage });

//上传藏品图片
router.post('/update', upload.single('image'), async (req, res) => {
    if (req.file) {
        var addPath = req.file.path;
        var buff = await fs.readFileSync(addPath);
        ipfs.add(buff).then((response) => {
            console.log(response)
            res.json({ success: true, message: '图片文件上传成功', file: response.path });
        })
    } else {
        res.json({ success: false, message: '请上传一个文件' });
    }
});
//上传藏品材质图
router.post('/update2', upload.single('texture'), (req, res) => {
    if (req.file) {
        var addPath = req.file.path;
        console.log(addPath)
        var buff = fs.readFileSync(addPath);
        ipfs.add(buff).then((response) => {
            res.json({ success: true, message: '材质文件上传成功', file: response.path });
        })
    } else {
        res.json({ success: false, message: '请上传一个文件' });
    }
});

//用户信息查看
router.get("/userInformation", function (req, res, next) {
    let sql = 'select * from user_table where role = 0';
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});

//订单列表查看
router.get("/orderList", function (req, res, next) {
    let sql = ` SELECT o.SSID,o.name,o.money,o.date, h.hash,u1.name AS buyer,  u2.name AS seller  
                FROM   
                    order_form as o 
                LEFT JOIN   
                    user_table as u1 ON o.buyer = u1.address  
                LEFT JOIN   
                    user_table as u2 ON o.seller = u2.address
                LEFT JOIN   
                    hash_card as h ON o.name = h.name AND o.ref = h.ref`;
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});

//发布藏品
router.post("/addCard", function (req, res, next) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const date = `${year}-${month}-${day}`;
    let sql = 'INSERT INTO card_table  (name, alias,birthday, number, remain,price, content, url, type, material) VALUES (?, ?, ?, ?, ?, ?,?, ?,?,?)'
    let data = [req.body.name, req.body.alias, date, req.body.num, req.body.num, req.body.price, req.body.content, req.body.url, req.body.type, req.body.material];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

//统计销售额
router.get("/getMoney", function (req, res, next) {
    let sql = `SELECT d.date, COALESCE(SUM(o.money), 0) AS total_money  FROM (  
                    SELECT
                        date_sub( curdate( ), INTERVAL 6 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 5 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 4 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 3 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 2 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 1 DAY ) AS date UNION
                        SELECT
                        date_sub( curdate( ), INTERVAL 0 DAY ) AS date
                        FROM DUAL
                    ) AS d  
                LEFT JOIN order_form o ON DATE(o.date) = d.date  
                GROUP BY d.date  
                ORDER BY d.date DESC;`
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});

//管理员登录
router.post("/rootLogin", function (req, res, next) {
    let sql = 'select id from user_table where account = ? and password = ? and role = 1';
    let data = [req.body.username, req.body.password];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//更改用户登录权限
router.post("/updatePermit", function (req, res, next) {
    let sql = 'UPDATE user_table SET permit = 1-permit WHERE (id = ?);';
    let data = req.body.id;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//查询藏品归属
router.post("/searchOwner", function (req, res, next) {
    let sql = `select h.*,u.name as username,u.address,u.account
    from hash_card as h 
    join owner_card as o
    ON h.name = o.name AND h.ref = o.ref
    join user_table as u
    where o.owner = u.address and h.hash =?`;
    let data = req.body.hash;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

module.exports = router;