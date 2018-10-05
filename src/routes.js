const express        = require('express');
const routes         = express.Router();
const PostController = require('./controllers/PostController') 

routes.get('/', PostController.index);

module.exports = routes;