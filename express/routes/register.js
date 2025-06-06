// 文件：register.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为用户注册路由

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');
const { SHA256 } = require('crypto-js');

/* 用户注册 */
router.post("/", function (req, res, next) {
  // 对密码进行SHA-256加密
  const hashedPassword = SHA256(req.body.password).toString();
  
  // 准备数据，使用加密后的密码
  let data = [req.body.account, req.body.address, req.body.name, hashedPassword];
  
  let sql = 'select * from user_table where account = ?';
  mysql.base(sql, [req.body.account], (result) => {
    if (result.length > 0) {
      res.json({
        state: 400,
        message: "该用户已存在"
      })
    } else {
      let sql = 'select * from user_table where address = ?';
      mysql.base(sql, [req.body.address], (result) => {
        if (result.length > 0) {
          res.json({
            state: 400,
            message: "该地址账号已存在"
          })
        } else {
          let sql = 'INSERT INTO user_table (account,address,name,password) value (?,?,?,?)';
          mysql.base(sql, data, (result) => {
            let sql2 = 'INSERT INTO user_texture (user_account) VALUES (?)'
            mysql.base(sql2, [req.body.account], (result) => {
              res.json(result);
            })
          })
        }
      })
    }
  })
});

module.exports = router;