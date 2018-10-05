const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
require('./src/models/Posts');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);