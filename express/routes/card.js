// 文件：card.js  
// 初始版本由余文建在 2023-04-20 创建，该项功能为藏品信息相关路由
var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');


//获取藏品列表
router.get("/getCardList", function (req, res, next) {
    let sql = "SELECT * FROM card_table order by birthday DESC LIMIT 9;";
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});
//获取所有藏品
router.get("/getAllCard", function (req, res, next) {
    let sql = "SELECT name,LEFT(content, 17) AS content,url,type,price FROM card_table order by birthday";
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});
//根据类型获取藏品
router.post("/getCardByType", function (req, res, next) {
    let sql = "SELECT name,LEFT(content, 17) AS content,url,type,price FROM card_table where type = ?  order by birthday DESC";
    let data = req.body.type;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//获取用户藏品信息
router.post("/getMyCardList", function (req, res, next) {
    let sql = `select o.name,c.alias,o.ref,t.type,o.owner,o.status,c.content,c.url,c.material 
               from owner_card as o  join card_table as c join card_type as t 
               where o.name = c.name and c.type = t.id and o.owner = ?`;
    let data = req.body.address;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//获取对应藏品信息
router.post("/getCard", function (req, res, next) {
    let sql = 'select * from card_table where name = ?';
    let data = [req.body.name]
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

//获取用户对应藏品信息
router.post("/getMyCard", function (req, res, next) {
    let sql = `select o.name as card_name,c.alias,o.ref,c.number,h.hash,h.transHash,o.owner,o.status,u.name as userName,c.content,c.url,c.material
	from owner_card as o    
	join   card_table as c 
		ON o.name = c.name  
	join   hash_card as h 
		ON o.name = h.name AND o.ref = h.ref  and o.ref = ? 
	join   user_table as u 
		ON o.owner = u.address  
	where  o.name = ? `;
    let data = [req.body.ref, req.body.name]
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//出售藏品
router.post("/saleCard", function (req, res, next) {
    let sql = 'INSERT INTO market (card_name,ref,seller,price) value  (?,?,?,?)';
    let data = [req.body.card_name, req.body.ref, req.body.seller, req.body.price];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//获取出售列表
router.get("/getMarket", function (req, res, next) {
    let sql = `select m.*,h.hash,h.transHash,c.url,c.alias,c.number,u.account,u.name
                from market as m 
                join card_table as c 
                join hash_card as h 
                ON m.card_name = h.name and m.card_name = c.name and m.ref = h.ref
                join user_table as u
                ON m.seller = u.address group by m.id`;
    mysql.base(sql, null, (result) => {
        res.json(result);
    })
});

//获取指定出售藏品
router.post("/searchMarket", function (req, res, next) {
    let sql = 'select m.*,c.url,u.account,u.name  from market as m join card_table as c join user_table as u where m.card_name like ? and card_name = c.name and u.address = m.seller;';
    let data = "%" + req.body.name + "%";
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});


//购买藏品
router.post("/soldCard", function (req, res, next) {
    let sql = 'select id from card_table where name = ?';
    let sql2 = 'UPDATE card_table  SET remain = remain - 1 where id = ?';
    let data = req.body.name;
    let cardId = 0;
    mysql.base(sql, data, (result) => {
        cardId = result[0].id;
        mysql.base(sql2, cardId, (result) => {
            res.json(result);
        })
    })
});


//铸造藏品
router.post("/addHashCard", function (req, res, next) {
    let sql = 'INSERT INTO hash_card (name, ref, hash, transHash) VALUES (?, ?, ?, ?)';
    let data = [req.body.name, req.body.ref, req.body.hash, req.body.transHash];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//更新藏品信息
router.post("/updateHash", function (req, res, next) {
    let sql = 'SELECT id FROM hash_card where name =? and ref = ?';
    let data = [req.body.card_name, req.body.ref];
    mysql.base(sql, data, (result) => {
        let sql2 = 'UPDATE hash_card SET transHash = ? WHERE (id = ?)';
        let data2 = [req.body.transHash, result[0].id]
        mysql.base(sql2, data2, (result) => {
            res.json(result);
        })
    })
});
//增加藏品主人
router.post("/addOwner", function (req, res, next) {
    let sql = 'INSERT INTO owner_card (name,type,ref,owner) VALUES (?, ?, ?, ?)';
    let data = [req.body.name, req.body.type, req.body.ref, req.body.owner];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//修改藏品状态
router.post("/cardStatus", function (req, res, next) {
    let sql = 'SELECT id FROM owner_card where name =? and ref = ?';
    let data = [req.body.card_name, req.body.ref];
    mysql.base(sql, data, (result) => {
        let id = result[0].id
        let sql2 = 'UPDATE owner_card SET status = 1-status WHERE (id = ?)';
        mysql.base(sql2, id, (result) => {
            res.json(result);
        })
    })
});

// 修改藏品归属
router.post("/transOwner", function (req, res, next) {
    let sql = 'SELECT id FROM owner_card where name =? and ref = ?';
    let data = [req.body.card_name, req.body.ref];
    mysql.base(sql, data, (result) => {
        let id = result[0].id
        let sql2 = 'UPDATE owner_card SET owner = ?,status = 1 WHERE (id = ?)';
        let data2 = [req.body.owner, id];
        mysql.base(sql2, data2, (result) => {
            res.json(result);
        })
    })
});


//下架藏品
router.post("/delist", function (req, res, next) {
    let sql = 'select id FROM market where card_name = ? and ref = ?';
    let data = [req.body.card_name, req.body.ref];
    mysql.base(sql, data, (result) => {
        let id = result[0].id
        let sql2 = 'delete from market where id = ?';
        mysql.base(sql2, id, (result) => {
            res.json(result);
        })
    })
});

//修改价格
router.post("/changePrice", function (req, res, next) {
    let sql = 'select id from market where card_name = ? and ref = ?';
    let data = [req.body.card_name, req.body.ref];
    mysql.base(sql, data, (result) => {
        let id = result[0].id
        let sql2 = 'UPDATE market SET price = ? WHERE id = ?';
        let data2 = [parseFloat(req.body.price), id];
        mysql.base(sql2, data2, (result) => {
            res.json(result);
        })
    })
});





module.exports = router;
