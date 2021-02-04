import React, {useState} from 'react';
import { db } from '../../context/firebase';
import swal from 'sweetalert';
import './Contact.css';


const Contact = () => {
    
   
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [phone, setPhone ] = useState('')
    const [message, setMessage ] = useState('')
    const [loader, setLoader] = useState(true)



    const handleSubmit = (e) => {

        e.preventDefault()
        setLoader(true)

        db.collection('contacts').add({
            name: name,
            email: email,
            phone: phone,
            message: message
        })
        .then(() => {
           
            swal({
                title:"Tu mensaje fue enviado con Exito!",
                text:"Te contactaremos a la brevedad",
                icon:"success",
             
              });
            setLoader(false)
        })
        .catch((err) => {
            alert(err.message)
            setLoader(false)
        })
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        
    }

    return (
        <div className='ContactContainer' >
            <form onSubmit={handleSubmit} className='Form'>
                <label className='Label'>
                Full Name
                </label>
                <input type='text' placeholder='Name' onChange={(e)=> setName(e.target.value)} className={`Input`} value={ name } id="user"/>
                <label className='Label'>
                    E-Mail
                </label>
                <input type='email' placeholder='Mail' onChange={(e)=> setEmail(e.target.value)} className='Input' value= { email }/>
                <label className='Label'>
                    Phone Number
                </label>
                <input type='numeric' placeholder='Phone' onChange={(e)=> setPhone(e.target.value)} className='Input' value= { phone }/>
                <label className='Label'>
                    Let us know your problems
                </label>
                <textarea type='text' placeholder='Message' onChange={(e)=> setMessage(e.target.value)} className='Input Message'value= { message }/>
                <button  className="Submit" type="submit" style={ {background: loader ? "blue" : "rgb(2,2,110"}}>Enviar</button>
            </form>
            
            <div className='ContactImage'>
                    <img src='assets/fullLogo.png' height={'400px'} alt='Logo'/>
            </div>
            
        </div>
    )
}


export default Contact;