var express = require('express');
var server = express();
var mongoose = require('mongoose');
var postRouter = require('./server/routers/post.router.js');
var bodyParser = require('body-parser');



var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(mongoURI);//establish connection to the mongo DB


server.get('/', function(req, res){
res.send('I am working');

});
server.use(postRouter);
server.listen(port, function(){
  console.log('Now listening on port...', port);


});
