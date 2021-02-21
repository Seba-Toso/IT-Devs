const express = require('express');
const cors = require('cors');
var colors = require('colors');

const app = express();

app.get('/api/test', cors(), (req, res) => {
  const test = [
    {id: 1, firstName: 'Cristian', lastName: 'Machuca'},
  ];
  res.json(test);
});

const port = 5000;

app.listen(port, () => console.log(colors.yellow.bold(`Firebase connected - Server on port ${port}`.yellow.bold)));


