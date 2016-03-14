var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var user = require('../models/user.js');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Use Passport's 'serializeUser' method to serialize the user
passport.serializeUser(function(user, done) {
 done(null, user);
});

// Use Passport's 'deserializeUser' method to load the user document
passport.deserializeUser(function(user, done) {
 done(null, user);
});



passport.use(new LocalStrategy(
  (username, password, done) => {
    user.findOne({ email: username }, (err, user) => {
      console.log("validation");
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));



/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  // user.insert()
});

router.post('/register',function(req, res, next){
  console.log("registering");
  var newUser =  new user(req.body);
  console.log(req.body);
  newUser.save((err, user)=>{
    if (err){
      console.log(err.errors);
    }
    else{
      res.redirect('/');
    }
  })

})

module.exports = router;
