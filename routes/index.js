var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Claire'});
});

/*GET Cart page.*/
router.get('/cart', function(req, res, next){
  res.render('cart',{
    title: 'Cart',
    totalPrice:200,
    dishArray:[
      {dishName:"Tudousi",unitPrice:"20",quantity:1},
      {dishName:"Paigu",unitPrice:"40",quantity:2},
      {dishName:"Guobaorou",unitPrice:"50",quantity:1}
    ]
    });
});

/*GET userInfo page*/
router.get('/userInfo', function(req, res, next){
  res.render('userInfo',{title: 'Me'});
});

module.exports = router;
