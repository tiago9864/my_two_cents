var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId, //This will allow use to populate the author for a particular post
    required: true
  },
  postDate: {
    type: Date,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});

postSchema.pre('findOneAndUpdate', function(){
  this.update({},{ $set: { postDate: new Date() } });
});



var Post = mongoose.model('Post', postSchema);
module.exports = Post;
