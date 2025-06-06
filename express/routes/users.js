// 文件：users.js  
// 初始版本由余文建在 2023-03-21 创建，该项功能为用户的对应路由操作

var express = require('express');
var router = express.Router();
const mysql = require('../mysql.js');
const { SHA256 } = require('crypto-js');

//获取session
router.get('/', (req, res) => {
  res.send(req.session.user)
})

//获取个人信息
router.post('/', function (req, res, next) {
  let sql = 'SELECT * FROM user_table where account = ?';
  let data = req.body.account;
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
});

//更新个人信息
router.post('/editForm', function (req, res, next) {
  const hashedPassword = SHA256(req.body.password).toString();
  let sql = 'UPDATE user_table SET name = ?, password = ?, payPassword = ? WHERE id = ?;';
  let data = [req.body.name,hashedPassword, req.body.payPassword, req.body.id];
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
});

//验证用户
router.post('/validate', function (req, res, next) {
  let sql = 'select id,address,balance from user_table where account = ? and payPassword = ?';
  let data = [req.body.account, req.body.password];
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
});

//用户充值
router.post("/addBalance", function (req, res, next) {
  let money = parseFloat(req.body.money * 100)
  let sql = 'UPDATE user_table SET balance = balance + ? WHERE id = ?';
  let data = [money, req.body.id,];
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
});

//用户消费
router.post("/reduceBalance", function (req, res, next) {
  let sql = 'UPDATE user_table SET balance = balance - ? WHERE id = ?';
  let data = [req.body.money, req.body.id,];
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
});

//用户出售藏品后获利
router.post("/income", function (req, res, next) {
  let sql = 'select id from user_table where address = ?';
  let sql2 = 'UPDATE user_table SET balance = balance + ? WHERE id = ?';
  let data = req.body.account;
  let money = parseFloat(req.body.money * 0.95)
  mysql.base(sql, data, (result) => {
    let id = result[0].id;
    let body = [money, id]
    mysql.base(sql2, body, (result) => {
      res.json(result);
    })
  })
});
//保存材质
router.post("/userTexture", function (req, res, next) {
  let sql = 'select id from user_texture where user_account = ?';
  let sql2 = `UPDATE user_texture  SET head = ?, face = ?, clothes = ?, pants = ?, shoes = ? ,head_name = ?, face_name = ?, clothes_name = ?, pants_name = ?, shoes_name = ? ,head_ref = ?, face_ref = ?, clothes_ref = ?, pants_ref = ?, shoes_ref = ?  WHERE (id = ?)`;
  let data = req.body.user_account;
  mysql.base(sql, data, (result) => {
    let id = result[0].id;
    let data2 = [req.body.head, req.body.face, req.body.clothes, req.body.pants, req.body.shoes,
    req.body.head_name, req.body.face_name, req.body.clothes_name, req.body.pants_name, req.body.shoes_name,
    req.body.head_ref, req.body.face_ref, req.body.clothes_ref, req.body.pants_ref, req.body.shoes_ref, id];
    mysql.base(sql2, data2, (result) => {
      res.json(result);
    })
  })
});
//获取最后一次保存的材质
router.post('/getTexture', (req, res) => {
  let sql = 'SELECT * FROM user_texture where user_account = ?';
  let data = req.body.account;
  mysql.base(sql, data, (result) => {
    res.json(result);
  })
})

module.exports = router;
