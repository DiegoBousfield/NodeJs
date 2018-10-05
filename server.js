const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
require('./src/models/Posts');

app.get('/', (req, res) => {res.send("Hello My Friends!")});

app.listen(3000);