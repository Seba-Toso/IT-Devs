import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../../context/firebase';
import { IoTrashBinSharp } from 'react-icons/io5';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from "react-router";
import 'firebase/auth';
import './Back.css';


const ClientsList = () => {
    const [data, setData] = useState([]);
    const [isFetching, setIsfetching] = useState(false)
    

    useEffect(() => { 
        setIsfetching(true)
        const clientsMessages = db.collection('Contacts').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
            setIsfetching(false)
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
        return !data.length ? (
            <div className="container">
            <h2 style={{color:'white', alignSelf: 'center'}}>{!isFetching? 'CARGANDO MENSAJES...' : 'NO HAY MENSAJES'}</h2>
            </div>
        )
        :
        (
            <div className="container">
                <h2 style={{color:'white'}}>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h2>  
                {
                    data.map( doc => {
                        return (
                            <div className="table" key={doc.id} >
                                <span className='tableItem'>
                                    <div className='tableTitle'>BORRAR</div>
                                    <div className='tableDescription tableAction' onClick={() => handleDelete(doc.id) }>
                                        <IoTrashBinSharp />
                                    </div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>ID</div>
                                    <div className='tableDescription'>{doc.id}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>NOMBRE</div>
                                    <div className='tableDescription'>{doc.name}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>E-MAIL</div>
                                    <div className='tableDescription'>{doc.email}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>TELÉFONO</div>
                                    <div className='tableDescription'>{doc.phone}</div>
                                </span>
                                <span className='tableItem'>
                                    <div className='tableTitle'>MENSAJE</div>
                                    <div className='tableDescription'>{doc.message}</div>
                                </span>
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
            <button type="submit" className="btn btn-secondary logout mt-5" onClick={ handleLogout }>
                Logout
            </button>
        </div>
    );
}

export default memo(ClientsList);

