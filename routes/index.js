var express = require('express');
var router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
