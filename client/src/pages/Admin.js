import React, { useState, useEffect } from 'react';
import { useFirebaseApp } from 'reactfire';
import { useHistory } from "react-router";
import { isAuthenticated }  from '../context/firebase';
import swal from 'sweetalert';
import 'firebase/auth';
import './Css/Admin.css';


 
const Admin = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  
  
 
  const firebase = useFirebaseApp();
  const history = useHistory();
  
  
  
  const  handleSubmit = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword( email,password )
        .then(()=>{
            
            history.push('/backoffice')

        }).catch((error)=>{
            swal({
                title: "Error en Usuario o la Contraseña",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        })
       
  }
  



    return (
            <div>
                <div className='section intro'>
                    <div className='sloganContainer'>
                        <h1 className='sloganText One'>IT-DEVS</h1>
                        <h1 className='sloganText Two'>SECTION</h1>
                        <h1 className='sloganText Three'>ADMIN</h1>
                    </div>
                </div>
                <div className="Container projectSlider section">
                    <div class="container">
                        <div class="login-form">
                        <div class="main-div">
                            <div class="panel mb-5">
                                <img src="../../assets/fullLogo.png" alt="admin" height={'150px'}/>
                            </div>
                            <p>Please enter your e-mail and password</p>
                                <form id="Login" onSubmit={ handleSubmit }>
                                    <div class="form-group">
                                        <input 
                                        type="email" 
                                        class="form-control" 
                                        id="inputEmail" 
                                        placeholder="Email Address"
                                        onChange={ (e) => setEmail( e.target.value )}
                                        required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input 
                                        type="password" 
                                        class="form-control" 
                                        id="inputPassword" 
                                        placeholder="Password"
                                        onChange={ (e) => setPassword( e.target.value )}
                                        required
                                        />
                                    </div>                               
                                    <button 
                                    type="submit" 
                                    class="btn btn-primary mt-5"
                                    >
                                    Login</button>
                                </form>
                        </div>
                                <p class="botto-text"> IT-Devs Web Sites Design.</p>
                        </div>
                    </div>
                </div>    
            </div>

    );
}

export default  Admin;