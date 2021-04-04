import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../../context/firebase';
import { IoTrashBinSharp } from 'react-icons/io5';
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
        if(!data.length) return (
            <div className="container">
            <h2 style={{color:'white', alignSelf: 'center'}}>NO HAY MENSAJES PARA MOSTRAR</h2>
                <button type="submit" className="btn btn-secondary logout mt-5" onClick={ handleLogout }>
                    Logout
                </button>
            </div>
        )
        
        return(
                <div className="container">
                <h2 style={{color:'white'}}>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h2>  
                <button 
                    type="submit" 
                    className="btn btn-secondary logout mt-5"
                    onClick={ handleLogout }
                    >
                    Logout</button>
                {
                    data.map( doc => {
                        return (

                            <div className="mb-3" key={doc.id} >
                                <div className="table table-dark mt-5 mb-5" >
                                    <div className='thead'>
                                        <div className='tr'>
                                            <div className='th' scope="col">ID</div>
                                            <div className='th' scope="col">Nombre</div>
                                            <div className='th' scope="col">E-mail</div>
                                            <div className='th' scope="col">Telefono</div>
                                            <div className='th' scope="col">Mensaje</div>
                                            <div className='th' scope="col">Eliminar</div>
                                        </div>
                                    </div>
                                    <div className='tbody' id='table'>
                                        <div className='tr trInfo'>
                                            <div className='td'>{ doc.id}</div>
                                            <div className='td'>{ doc.name }</div>
                                            <div className='td'>{ doc.email }</div>
                                            <div className='td'>{ doc.phone }</div>
                                            <div className='td'>{ doc.message }</div>
                                            <div className='td stateButton'
                                                onClick={() => handleDelete(doc.id) }>
                                                <IoTrashBinSharp /></div>
                                        </div>   
                                    </div>
                                </div>
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



