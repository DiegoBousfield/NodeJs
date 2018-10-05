const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  postText: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String
  }
});

mongoose.model('Post', PostSchema);