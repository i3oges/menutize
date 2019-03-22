var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    sunday: {
      open: 5,
      close: 18
    },
    monday: {
      open: 5,
      close: 21
    },
    tuesday: {
      open: 5,
      close: 21
    },
    wednesday: {
      open: 6,
      close: 21
    },
    thursday: {
      open: 3,
      close: 19
    },
    friday: {
      open: 6,
      close: 2
    },
    saturday: {
      open: 10,
      close: 21
    }
  })
});

module.exports = router;
