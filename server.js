const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/test', cors(), (req, res) => {
  const test = [
    {id: 1, firstName: 'Cristian', lastName: 'Machuca'},   
  ];
  res.json(test);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);