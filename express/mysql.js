// 文件：mysql.js  
// 初始版本由余文建在 2023-03-20 创建，该项功能为封装MySQL操作
const mysql = require('mysql');

exports.base =(sql,data,callback) =>{

    const connection = mysql.createConnection({
        host:"127.0.0.1",
        user:"root",
        password:"123456",
        database:"polang",
        charset: 'utf8mb4',
        timezone:"Asia/Shanghai"
    });
    connection.connect();

    connection.query(sql,data,function(err,res,fields){
        if(err) throw err;
        callback(res);
    });

    connection.end();
}