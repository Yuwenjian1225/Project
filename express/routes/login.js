// 文件：login.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为用户登录路由

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');
const { SHA256 } = require('crypto-js');


/* 用户登录*/
router.post("/", function (req, res, next) {
  const hashedPassword = SHA256(req.body.password).toString();
  let sql = 'select * from user_table where account = ? and password = ? and address = ?';
  let data = [req.body.account, hashedPassword, req.body.address];
  mysql.base(sql, data, (result) => {
    if (result[0]) {
      const username = result[0].account
      req.session.user = username; // 将用户信息存储在 session 中
      req.session.save()
      res.json(result);
    } else {
      res.send({
        success: '登录出错',
        code: 400,
      });
    }

  })
});

module.exports = router;