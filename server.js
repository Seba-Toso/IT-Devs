require('dotenv').config()
const express = require('express');
const cors = require('cors');
const  colors = require('colors');
const app = express();
const  morgan = require('morgan')


// middleware...
app.use(morgan())


// api backend...

app.get('/api/test', cors(), (req, res) => {
  const test = [
    {id: 1, firstName: 'Cristian', lastName: 'Machuca'},
  ];
  res.json(test);
});

const port = 5000;

app.listen(port, () => console.log(colors.yellow.bold(`Firebase connected - Server on port ${port}`.yellow.bold)));


