const express = require("express");
const app = express();
const mysql = require("mysql");

// 创建连接
var connection = mysql.createConnection({    
  host     : 'localhost',      
  user     : 'root',             
  password : 'mhy.1216',                     
  database : 'mydb',
  port     : '3306'
});
connection.connect();

// 解决跨域请求问题!!!
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// http://127.0.0.1:8081/login?username=mhy&password=11
app.get('/login',function (req,res) {
  var response = {
     "username":req.query.username,
     "password":req.query.password,
 };
  var selectSQL = "select username,password from user where username = '"+req.query.username+"' and password = '"+req.query.password+"'";
  console.log("selectSQL---",selectSQL);
  connection.query(selectSQL,function (err, result) {
    if(err) {
      console.log('[login ERROR] - ',err.message);
      return;
    }
    if(result=='') {
      console.log("帐号密码错误");
      res.end("0");//如果登录失败就给客户端返回0，
    } else {
      console.log("OK");
      res.end("1");//如果登录成就给客户端返回1
    }
  });
  console.log(response);
  //res.end(JSON.stringify(response));
})

// 开启服务器
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})