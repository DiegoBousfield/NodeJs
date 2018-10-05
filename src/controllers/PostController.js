const mongoose = require('mongoose');
const Post     = mongoose.model('Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  }
} 