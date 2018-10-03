const express = require('express');

const app = express();

app.get('/', (req, res) => res.send("Hello My Friends!"));

app.listen(3000);