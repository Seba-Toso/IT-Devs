const express = require('express');
const { addContact, 
        getContacts,
        getContact, 
        upDateContact, 
        deleteContact 
    } = require('../controllers/contactController');
const router = express.Router();


router.post('/contact', addContact);
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContact);
router.put('/contacts/:id', upDateContact);
router.delete('/contacts/:id', deleteContact);


module.exports ={
    routes: router
}