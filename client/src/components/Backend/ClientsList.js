import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../../context/firebase';
import {IoCheckmarkDone} from 'react-icons/io5'
import './Back.css'


const ClientsList = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => { 
        const clientsMessages = db.collection('Contacts').onSnapshot(snap => {
            const data = snap.docs.map(doc => ({...doc.data(), 'id': doc.id}))
            setData(data)
        });
        return () => clientsMessages()

    }, []);
    

 
    const messageList = useMemo(() => {
        if(!data.length) return <h1 style={{color:'white'}}> ...Buscando contactos...</h1>

            return(
                <div className="container">
                <h1 style={{color:'white'}}>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h1>
                {
                    data.map( doc => {
                        return (

                            <div className="mb-3" key={doc.id} >
                            <table className="table table-dark mt-5 mb-10" >
                                    <thead>
                                        <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Mensaje</th>
                                        <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    <tbody id='table'>
                                    <tr>
                                        <td>{ doc.name }</td>
                                        <td>{ doc.email }</td>
                                        <td>{ doc.phone }</td>
                                        <td>{ doc.message }</td>
                                        <td  className='stateButton' onClick={() => alert('cambio de estado')}><IoCheckmarkDone fontSize='24px' color='green' /></td>
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



