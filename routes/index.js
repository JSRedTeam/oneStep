var express = require('express');
var router = express.Router();

// define cImage,randomSuggestion by controller
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { cImage: [{id:"_id",url:"url",name:"string",price:"number"}],
    randomSuggestion: [{id:"_id",url:"url",name:"string",price:"number"}]});
});

/*GET Cart page.*/
router.get('/cart', function(req, res, next){
  res.render('cart',{
    title: 'Cart',
    totalPrice:200,
    // user:{name:"Claire"},
    dishArray:[
      {dishName:"Tudousi",unitPrice:"20",quantity:1},
      {dishName:"Paigu",unitPrice:"40",quantity:2},
      {dishName:"Guobaorou",unitPrice:"50",quantity:1}
    ]
    });
});

/*GET userInfo page*/
router.get('/userInfo', function(req, res, next){
  // res.render('userInfo',{title: "Me", user:{image:"http://img4.imgtn.bdimg.com/it/u=432839616,2165665298&fm=21&gp=0.jpg", name:"Claire"}});
  res.render('userInfo',{title: "Me"});
});

router.get('/login',function(req,res,next){
  res.locals.title = "Login";
  res.render('login');
})

router.get('/register',function(req,res,next){
  res.locals.title = "Register";
  res.render('register');
})

router.get('/deliveryInfo',function(req,res,next){
  res.locals.title = "Delivery";
  res.render('deliveryInfo');
})

module.exports = router;
