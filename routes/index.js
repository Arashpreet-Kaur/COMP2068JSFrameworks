var express = require('express');
var router = express.Router();

router.get('/newton', function(req, res, next) {
  res.render('newton');
});

router.get('/einstein', function(req, res, next) {
  res.render('einstein');
});

router.get('/curie', function(req, res, next) {
  res.render('curie');
});

router.get('/tesla', function(req, res, next) {
  res.render('tesla');
});

module.exports = router;
