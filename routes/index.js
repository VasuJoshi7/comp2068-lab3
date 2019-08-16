var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/marilyn', function(req, res, next) {
  res.render('marilyn', { title: 'Index' });
});
router.get('/abraham', function(req, res, next) {
  res.render('abraham', { title: 'Index' });
});
router.get('/MotherTeresa', function(req, res, next) {
  res.render('mt', { title: 'Index' });
});
router.get('/billgate', function(req, res, next) {
  res.render('billgate', { title: 'Index' });
});

module.exports = router;
