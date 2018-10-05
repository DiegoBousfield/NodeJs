const mongoose = require('mongoose');
const Post     = mongoose.model('Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.find();

    return res.json(posts);
  },

  async showCategory(req, res) {
    const post = await Post.find({ category: req.params.category});
    return res.json(post);
  },

  async store(req, res) {
    const post = await Post.create(req.body);
    return res.json(post);
  },

  async update(req, res) {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(post);
  }
} 