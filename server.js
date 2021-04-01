const app = require('./app');
const colors = require('colors');


//server backend...
app.listen(app.get('port'), () => 
      console.log('Firebase connected - Server on port', 
                  colors.yellow(app.get('port'))
      )
);



