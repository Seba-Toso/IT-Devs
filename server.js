const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var colors = require('colors');

const app = express();

app.get('/api/test', cors(), (req, res) => {
  const test = [
    {id: 1, firstName: 'Cristian', lastName: 'Machuca'},
  ];
  res.json(test);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/jr-devs')
        .then(() => {
            console.log(colors.yellow.bold('Conexion a MongoDB correcta'));
        })
        .catch(err =>  console.log(colors.rojo.bold(err)));
