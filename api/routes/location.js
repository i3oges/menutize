var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    address: '123 bobby st',
    address2: 'suite c',
    city: 'Hudson',
    state: 'WI',
    zip: 54016
  })
});

module.exports = router;
