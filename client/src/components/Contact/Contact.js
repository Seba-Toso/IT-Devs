import React, { useState } from 'react';
import { db } from '../../context/firebase';
import swal from 'sweetalert';
import './Contact.css';


const Contact = () => {
    
   
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [phone, setPhone ] = useState('');
    const [message, setMessage ] = useState('');
    

    const handleSubmit = (e) => {

        e.preventDefault()
       

        db.collection('Contacts').add({
            name: name,
            email: email,
            phone: phone,
            message: message
        })
        .then((docRef) => {
            const clientId = docRef.id;
           
            swal({
                title:"Tu mensaje fue enviado con Exito!",
                text:`Te contactaremos bajo tu solicitud N- ${clientId}`,
                icon:"success",
             
              })
           
        })
        .catch((err) => {
            alert(err.message)
            
        })
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')

       
    }

    function form (){
        return (
            <div className='section contact'>
            <h1 className='title contactTitle'>CONTACTATE CON NOSOTROS</h1>
            <div className='ContactContainer' >
            <form onSubmit={ handleSubmit } 
                        className='Form'
                        id='form'
                         >
                <label className='Label'>
                    Nombre completo
                </label>
                <input 
                        type='text' 
                        placeholder='Nombre completo' 
                        onChange={(e) => setName( e.target.value )} 
                        className= 'Input' 
                        value={ name } 
                        id="user"
                        required
                        />
                <label className='Label'>
                    E-Mail de contacto
                </label>
                <input 
                        type='email' 
                        placeholder='it.devs@it-devs-mail.com' 
                        onChange={(e) => setEmail( e.target.value )} 
                        className='Input' 
                        value= { email }
                        required
                        id='email'
                        />
                <label className='Label'>
                    Teléfono de contacto
                </label>
                <input 
                        type='numeric' 
                        placeholder='7777-7777' 
                        onChange={(e) => setPhone( e.target.value )} 
                        className='Input' 
                        value= { phone }
                        required
                        id='phone'
                        />
                <label className='Label'>
                    Escribinos en qué podemos ayudar
                </label>
                <textarea 
                        type='text' 
                        placeholder='Mensaje...' 
                        onChange={(e)=> setMessage( e.target.value)} 
                        className='Input Message'
                        value= { message }
                        required
                        id='message'
                        />
                <button  
                    className="myButton" 
                    id="submitBtn"
                    type="submit"
                >Enviar
                </button>
            </form>
            
            <div className='ContactImage'>
                    <img 
                        src='assets/contactForm.png' 
                        height={'400px'} 
                        alt='Contact background'
                    />
            </div>
            
        </div>
        </div>
        )
    }

    

    return (
        <div>{ form() }</div>
    )
}


export default Contact;