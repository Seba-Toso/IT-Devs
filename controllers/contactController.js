'use strict'

const firebase = require('../db');
const Contact = require('../models/contact');
const firestore = firebase.firestore(); 


const addContact = async ( req, res ) => {
    try {
        const data = req.body;
        await firestore.collection('Contacts').doc().set(data);
        res.send('Contactado...')
    }catch( err ) {
        res.status(400).send( error.message )
    }
}

const getContacts = async ( req, res ) => {
    try {      
        const clientsMessages = await firestore.collection('Contacts');
        const data = await clientsMessages.get();
        const contactList = []
        if(data.empty) {
            res.statu(400).send('No hay mensajes...')
        }else {
            data.forEach( doc => {
                const contact = new Contact (
                    doc.id,
                    doc.data().name,
                    doc.data().email,
                    doc.data().phone,
                    doc.data().message

                );
                contactList.push(contact);
            })
            res.json({
                Operation: "Success",
                Clients: contactList
            });
        }
    }catch( err ) {
        res.status(400).send( error.message )
    }
}

const getContact = async (req, res ) => {
    try {
        const id = req.params.id;
        const contact = await firestore.collection('Contacts').doc(id);
        const data = await contact.get();
        if(!data.exists) {
            res.status(404).send('No se encontro dicho contacto.');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const upDateContact = async ( req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const contact = await firestore.collection('Contacts').doc(id);
        
        await contact.update(data);
        res.send('Contacto modificado.')

    }
    catch( err ) {
        res.status(400).send( error.message )
    }
}

const deleteContact = async (req, res ) => {
    try {
        const id = req.params.id;
        await firestore.collection('Contacts').doc(id).delete();
        res.send('Se ha borrado dicho contacto.');
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addContact,
    getContacts, 
    getContact,
    upDateContact,
    deleteContact
}