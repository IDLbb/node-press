var express = require('express');
// express 实例
// app.get('/') 监听get请求   中间件函数
// app.post() 监听 post请求    中间件函数
// app.put()
// app.delete()
// app.update()

// app.listen()  监听端口号
// app.set() 设置不同的一些的变量

// app.use()   调用中间件函数
var app = express();

// http://localhost:3000/ - 匹配 url 是 / 开头的
// app.get('/', function(req, res, next) {
//   console.log('1');
//   // 让其执行下一个中间件函数，只需要调用 next()
//   next();
// }, function(req, res, next){
//   console.log(2);
//   // send - 请求-响应周期已经关掉了
//   res.send('首页');
//   next();
// }, function(req, res) {
//   console.log(3);
//   // res.send('啊，首页');
//   console.log(req.query.name);
// });




// app.get('/abc', function(req, res, next) {
//   console.log('/abc - 1');
//   res.send('123123');
//   next();
// })

// app.get('/abc', function(req, res) {
//   console.log('/abc - 2');
//   // res.cookie()
// })

// 确保某个中间件函数在使用 use 的后面都需要使用的话，那就可以将 这个中间件函数放到use 中 去调用

app.use('/a', function(req, res, next) {
  console.log('请求的地址是', req.url);
  next();
})

app.get('/a/hello', function(req, res) {
  res.send('hello');
})


app.get('/b/world', function(req, res) {
  res.send('world');
})

app.listen(3000);