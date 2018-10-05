const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
require('./src/models/Posts');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);