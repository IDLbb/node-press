var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');  // 提供日志的中间件

// 路由代码，抽取到一个文件夹
// users/create
// users/find
// users/register
// users/login
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var phoneRouter = require('./routes/phone');

var app = express();

// 设置 模板引擎的存放目录与用的什么模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// 为了支持 req.body 的使用
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 为了获取 cookie 的
app.use(cookieParser());

// 设置静态文件托管
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
  console.log('我是个中间件');
  next();
})

// 设置 抽离出去的 路由文件的访问路径的前缀

// url 已 / 开头的，都会走到 indexRouter 中去。
// http://localhost:3000/
app.use('/', indexRouter);

// url 已  /users 开头的，都会走到 usersRouter 中去
app.use('/users', usersRouter);

app.use('/abca', phoneRouter);

// 404 文件的处理
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误的处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
