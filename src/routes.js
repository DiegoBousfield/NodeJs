const express        = require('express');
const routes         = express.Router();
const PostController = require('./controllers/PostController') 

routes.get('/posts', PostController.index);
routes.get('/posts/:category', PostController.showCategory);
routes.put('/posts/:id', PostController.update);
routes.post('/posts', PostController.store);
module.exports = routes;