// 文件：order.js  
// 初始版本由余文建在 2023-05-20 创建，该项功能为订单的对应路由操作

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');

//获取订单
router.post("/getOrder", function (req, res, next) {
    let sql = 'SELECT * FROM order_form where SSID = ?';
    let data = req.body.trade_no;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

//增加订单
router.post("/addOrder", function (req, res, next) {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const date = `${year}-${month}-${day}`;
    let sql = 'INSERT INTO order_form (SSID, name, ref,buyer, seller, money, date) VALUES (?, ?,?, ?, ?, ?, ?)';
    let data = [req.body.trade_no, req.body.name, req.body.ref,req.body.buyer, req.body.seller, req.body.price, date];
    mysql.base(sql, data, (result) => {
        res.json(result);

    })
});

//获取特定订单
router.post("/getRid", function (req, res, next) {
    let sql = 'SELECT * FROM recharge where RID = ?';
    let data = req.body.trade_no;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

//增加订单
router.post("/addRecharge", function (req, res, next) {
    let sql = 'INSERT INTO recharge (RID) VALUES (?)';
    let data = req.body.trade_no;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});




module.exports = router;
