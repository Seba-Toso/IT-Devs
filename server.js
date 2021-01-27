const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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
mongoose.connect('mongodb://localhost:27017/jr-devs', {useMongoClient: true})
        .then(() => {
            console.log('La conexión a MongoDB se ha realizado correctamente');
        })
        .catch(err => console.log(err));
