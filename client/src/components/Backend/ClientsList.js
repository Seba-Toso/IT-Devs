import React, { useState, useEffect } from 'react';
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



    return (
        <div className="container">
            <h1>MENSAJES DE CLIENTES DESDE BASE DE DATOS</h1>
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
                                    <th scope="row">{ doc.id }</th>
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
    );
}

export default ClientsList;



