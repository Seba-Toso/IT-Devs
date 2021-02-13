import React, {useState} from 'react';
import { db } from '../context/firebase';
import swal from 'sweetalert';
import './Estimate.css'

const Estimate = () =>{

    const totalPrice = 4000
    const backendPrice = 0
    const frontendPrice = 0
    const userInterfacePrice = 0
    
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

    return(
        <div>
            <div className='section intro'>
                <div className='sloganContainer'>
                        <h1 className='sloganText One'>CALCULA</h1>
                        <h1 className='sloganText Two'>EL COSTO</h1>
                        <h1 className='sloganText Three'>DE TU IDEA.</h1>
                </div>
            </div>
            <div className='section estimate'>
                <div className='buttonsContainer'>
                    <div className='estimatorDetails'>
                        <h3 className='detailTitle'>Calculá cuánto podría llegar a costarte.</h3>
                        <p className='detailText'>
                            Te facilitamos esta manera de hacerte una primera idea de cuánto puede llegar a costarte
                            realizar ese proyecto que soñas.
                            Tené en cuenta que para cerrar un costo final será necesaria una reunión, por lo que si estás interesado/a 
                            podés solicitar un encuentro al final de esta sección.  
                        </p>
                    </div>
                    <div className='btn btn-primary'>Diseño de UI / UX</div>
                    <div className='btn btn-primary'>Login con Redes Sociales</div>
                    <div className='btn btn-primary'>Integración con Whatsapp</div>
                    <div className='btn btn-primary'>Registro de usuarios</div>
                    <div className='btn btn-primary'>Registro con Email</div> 
                    <div className='btn btn-primary'>Aceptar Pagos</div> 
                    <div className='btn btn-primary'>Google Maps</div> 
                    <div className='btn btn-primary'>Mensajería on-Site</div> 
                    <div className='btn btn-primary'>Lista de Tareas</div> 
                    <div className='btn btn-primary'>Administración de pagos</div> 
                    <div className='btn btn-primary'>Carrito de compras</div> 
                    <div className='btn btn-primary'>Perfiles de usuario</div> 
                    <div className='btn btn-primary'>Carga de archivos</div>
                    <div className='btn btn-primary'>Música / Video</div> 
                    <div className='btn btn-primary'>Galería de Fotos</div>  
                    <div className='btn btn-primary'>Búsquedas on-Site</div> 
                    <div className='btn btn-primary'>Filtros</div> 
                    <div className='btn btn-primary'>Adaptación Mobile</div> 
                    <div className='btn btn-primary'>Actualización en tiempo real</div> 
                    <div className='btn btn-primary'>Administración de usuarios</div> 
                    <div className='btn btn-primary'>Integración de calendarios</div> 
                    <div className='btn btn-primary'>Sistema de gestión</div> 
                    <div className='btn btn-primary'>Reservas</div> 
                    <div className='btn btn-primary'>Reportes diarios / semanal / mensual</div> 
                    <div className='btn btn-primary'>Revisión y mantenimiento</div> 
                </div>
                <div className='totalContainer'>
                    <div className='totalSection'>
                        <h6 className='totalTitle'>Total Estimado</h6>
                        <h3 id='totalPrice'>${totalPrice}</h3>
                        <div className='totalDetails'>
                            <p className='detailName'>BackEnd</p>
                            <p className='detailPrice'>${backendPrice}</p>
                            <p className='detailName'>FrontEnd</p>
                            <p className='detailPrice'>${frontendPrice}</p>
                            <p className='detailName'>Diseño de UI</p>
                            <p className='detailPrice'>${userInterfacePrice}</p>
                        </div>
                        <form onSubmit={handleSubmit} className='estimatorForm'>
                            <input type='text' placeholder='Nombre' onChange={(e)=> setName(e.target.value)} className='estimatorInput' value={ name } id="user"/>
                            <input type='email' placeholder='Mail' onChange={(e)=> setEmail(e.target.value)} className='estimatorInput' value= { email }/>
                            <input type='numeric' placeholder='Teléfono' onChange={(e)=> setPhone(e.target.value)} className='estimatorInput' value= { phone }/>
                        </form>
                        <div className='sendButton' type='submit'>Solicitar Encuentro</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Estimate;