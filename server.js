const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const config = require('./config');
const contactRoute = require('./routes/contact-Routes');


// app...
const app = express();



// uses...
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

// routes...
app.use('/api', contactRoute.routes);




//server backend...
app.listen(config.port, () => 
      console.log('Firebase connected - Server on port', 
                  colors.yellow(config.port)
      )
);



