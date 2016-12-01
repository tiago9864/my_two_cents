



var express = require('express');
var router = express.Router();
var User = require('../models/user.model.js');

router.get('/users/profile/:userId', function(req, res){
  User.find({ _id: req.params.userId }, function(err, user){
    if(err){
      return res.status(500).json({
        err: err
      });
    }
    return res.status(200).json({
      user: user
    });
  });
});
router.post('/users/signup', function(req, res){
  var user = new User(req.body);
  if(!req.body.password){
    return res.status(400).json({
      msg: 'Bad Request - Signups require passwords'
    });
  }
  //TODOcheck to see if an email is on req.body if not, send 400 with message
 user.setPassword(req.body.password);

  user.save(function(err){
    if(err){
      return res.status(500).json({
        err: err
      });
    }
    return res.status(201).json({
      msg: 'Success!'
    });
  });
});
router.post('/users/login', function(req, res){
  //edge case missing information on the Request
  if(!req.body.email || !req.body.password){
    return res.status(401).json({
      msg: "The username or password you have provided is incorrect"
    });
  }
  User.findOne({email: req.body.email}, function(err, user){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    if(!user){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });

    }
    if(!user.validPassword(req.body.password)){
      return res.status(401).json({
        msg: "The username or password you have provided is incorrect"
      });
    }
    return res.status(200).json({
      token: user.generateJwt()
    });
  });
});
router.put('/users/profile/:userId', function(req, res){});

module.exports = router;
