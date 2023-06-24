var express = require('express');
var router = express.Router();

var available = true;
var date = new Date();


if(date.getDay()>5)
available = false

if(date.getHours()>17 || date.getHours()<9)
available = false

/* GET home page. */
router.get('/HomePage', function(req, res){
  res.render('Home-page', {title: 'Home page', available: available});
});

router.get('/OurServices', function(req, res){
  res.render('Our-Services', {title: 'Our Services', available: available});
});

router.get('/ContactUs', function(req, res){
  res.render('Contact-Us', {title: 'Contact Us', available: available});
});

module.exports = router;
