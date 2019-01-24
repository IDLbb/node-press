var express = require('express');
var router = express.Router();

// http://localhost:3000/abca/create
router.get('/create', function(req, res) {
  res.send('新建一个手机');
})

module.exports = router;