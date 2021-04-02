import React, { useState, useEffect, useMemo, memo } from 'react';
import { db } from '../../context/firebase';


const ClientsList = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => { 
        const clientsMessages = db.collection('Contacts').onSnapshot(snap => {
          const data = snap.docs.map(doc => doc.data())
          setData(data)
        });
        return () => clientsMessages()
 }, []);

 
    const messageList = useMemo(() => {
        if(!data.length) return <h1 style={{color:'white'}}> ...Buscando contactos ...</h1>
       
            return(
                <div className="container">
                <h1 style={{color:'white'}}>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h1>
                {
                    data.map( doc => {
                        return (

                            <div class="mb-3">
                            <table className="table table-dark mt-5 mb-10" key={ doc.id }>
                                    <thead>
                                        <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Telefono</th>
                                        <th scope="col">Mensaje</th>
                                        </tr>
                                    </thead>
                                    <tbody id='table'>
                                    <tr>
                                        <td>{ doc.name }</td>
                                        <td>{ doc.email }</td>
                                        <td>{ doc.phone }</td>
                                        <td>{ doc.message }</td>
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
                    <h1 className='sloganText Two'>SECTION</h1>
                    <h1 className='sloganText Three'>BACKEND.</h1>
                </div>
            </div>
            <div className="Container projectSlider section">
            { messageList }
            </div>
        </div>
    );
}

export default memo(ClientsList);



