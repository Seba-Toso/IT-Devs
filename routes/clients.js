const { Router } = require ('express');
const cors = require('cors');
const router = Router();
const admin = require('firebase-admin');


const serviceAccount = require('../it-devs-web-site-firebase-adminsdk-5rt5e-dc15ac8075.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://it-devs-web-site-default-rtdb.firebaseio.com/'
});

const db = admin.database();

// Routes backend...
router.get('/', ( req, res ) => {
    db.ref('id10').once('value', ( snapshot ) => {
        const clientsData = snapshot.val();
        res.render('index', { contacts: clientsData });
    });
});

router.get('/api/test', cors(), (req, res) => {
    const test = [
      {id: 1, ProyectoWeb: 'IT-Devs', Hosting: 'LocalHost'},
    ];
    res.json(test);
  });
  
  module.exports = router;