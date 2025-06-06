const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const session = require('express-session')

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const usersRouter = require('./routes/users');
const cardRouter = require("./routes/card");
const orderRouter = require("./routes/order");
const notifyRouter = require("./routes/notify");
const rootRouter = require("./routes/root");
const zfbRouter = require("./routes/zfb/payable");

const app = express();
const bodyParser = require('body-parser');
app.use(express.json()); // 用于解析JSON请求体


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// 跨域请求
app.use(cors({
  origin: '*',
  credentials: true,
}))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get("Origin"));
  res.header('Access-Control-Allow-Headers', 'credentials,Content-Type, Content-Length, Authorization, Accept, X-Requested-With, token');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  //若要返回cookie、携带seesion等信息则将此项设为true。此时Access-Control-Allow-Origin不能设置为*
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//配置session
app.use(session({
  secret: 'keyboard',  
  resave: false,           
  cookie: { maxAge: 600000 * 100 }, 
  saveUninitialized: false, 
}))

app.use(function (req, res, next) {
  console.log(req.originalUrl)
  if (req.session.user) {
    next()
  } else if (req.originalUrl === '/api/login' || req.originalUrl === '/api/register' || req.originalUrl.includes('/api/root')|| req.originalUrl.includes('/api/pay')){
    next()
  } else {
    res.json(0)
  }
});

app.use("/api/card", cardRouter);
app.use("/api/login", loginRouter)
app.use('/api/register', registerRouter);
app.use('/api/information', usersRouter);
app.use('/api/order', orderRouter);
app.use('/api/notify', notifyRouter);
app.use('/api/root', rootRouter);
app.use('/api/pay', zfbRouter);



app.listen(3000, () => {
  console.log('success running')
})



module.exports = app;

