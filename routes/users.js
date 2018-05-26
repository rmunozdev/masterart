var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ' + new Date().toUTCString());
});

router.get('/all', function(req, res, next) {
	  res.send('All at ' + new Date().toUTCString());
});

module.exports = router;
