var express = require('express');
var router = express.Router();

/* GET home page. */

// http://localhost:3000/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'hello 张三' });
});

// http://localhost:3000/abc
router.get('/abc', function(req, res ) {
  res.send('abc');
})

module.exports = router;
