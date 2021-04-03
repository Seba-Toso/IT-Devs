import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../../context/firebase';
import { IoCloseCircle } from 'react-icons/io5';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from "react-router";
import 'firebase/auth';
import './Back.css';


const ClientsList = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => { 
        const clientsMessages = db.collection('Contacts').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
        });
        return () => clientsMessages()

    }, []);

    const firebase = useFirebaseApp();
    const history = useHistory();

    const handleLogout = () => {
        firebase.auth().signOut()
        history.push('/admin')       
    }

    const handleDelete = ( id ) => {
        db.collection('Contacts').doc(id).delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }
    



    const messageList = useMemo(() => {
        if(!data.length) return <h1 style={{color:'white'}}> ...Buscando contactos...</h1>
        
        return(
                <div className="container">
                <h1 style={{color:'white'}}>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h1>  
                <button 
                    type="submit" 
                    class="btn btn-secondary logout mt-5"
                    onClick={ handleLogout }
                    >
                    Logout</button>
                {
                    data.map( doc => {
                        return (

                            <div className="mb-3" key={doc.id} >
                            <table className="table table-dark mt-5 mb-10" >
                                    <thead>
                                        <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Mensaje</th>
                                        <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody id='table'>
                                    <tr>
                                        <td>{ doc.id}</td>
                                        <td>{ doc.name }</td>
                                        <td>{ doc.email }</td>
                                        <td>{ doc.phone }</td>
                                        <td>{ doc.message }</td>
                                        <td  className='stateButton' 
                                             onClick={() => handleDelete(doc.id) }>
                                             <IoCloseCircle fontSize='24px' color='red' /></td>
                                    </tr>   
                                    </tbody>
                            </table>
                            </div>
                        )
                    })
                }     
            </div>
        )



    }, [ data ])


    return ( 
        <div>
            <div className='section intro'>
                <div className='sloganContainer'>
                    <h1 className='sloganText One'>IT-DEVS</h1>
                    <h1 className='sloganText Two'>BACKOFFICE</h1>
                    <h1 className='sloganText Three'>BIENVENIDO</h1>
                </div>
            </div>
            <div className="Container projectSlider section">
            { messageList }
            </div>
        </div>
    );
}

export default memo(ClientsList);



