// 文件：notify.js  
// 初始版本由余文建在 2023-05-22 创建，该项功能为用户通知路由操作

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');

//获取信息通知
router.post("/getNotify", function (req, res, next) {
    let sql = `SELECT * FROM sold where seller =  ?  order by id desc`;
    let data = req.body.address;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

//增加信息通知
router.post("/addNotify", function (req, res, next) {
    let money = parseFloat(req.body.money * 0.95)
    let sql = `INSERT INTO sold (card_name, seller, profit,new) VALUES (?, ?, ?,1)`;
    let data = [req.body.card_name,req.body.seller,money];
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});
//修改通知状态
router.post("/notifyStatus", function (req, res, next) {
    let sql = `UPDATE sold SET new = 1 - new WHERE (id = ?)`;
    let data = req.body.id;
    mysql.base(sql, data, (result) => {
        res.json(result);
    })
});

module.exports = router;
