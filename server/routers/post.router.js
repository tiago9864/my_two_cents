var express = require('express');
var router = express.Router();
var Post = require('../models/post.model.js');

router.get('/posts', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      returnres.status(500).json({
        msg: err
      });
    }
    return res.status(200).json({
      posts: posts
    });
  });
});
router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, foundPost){
    if(err){
      return re.status(500).json({
       msg: err
      });
      //next();
    }
    return res.status(200).json({
      post: foundPost
    });
  });
});
router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.postDate = new Date();
  console.log(req.body);
  // return res.send('stuff');
  post.summary = req.body.body.slice(0, 100) + '...';
  post.save(function(err){
    if(err){
      return res.status(500).json({
        msg: err
      });
    }
    return res.status(201).json({
        msg:'Success'
    });
  });
});
//router.post('/posts/:id', function(req, res){});
router.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, oldPost){
    if(err){
      return res.status(500).json({
        err: err
      });
    }
    return res.status(200).json({
      msg: oldPost
    });
  });
});
router.delete('/posts/:id', function(req, res){
  Post.findOneAndRemove({ _id: req.params.id}, function(err, deletePost){
     if(err){
       return res.status(500).json({
         err: err
       });
     }
     return res.status(201).json({
       msg: deletePost
     });
   });
});



module.exports =router;
