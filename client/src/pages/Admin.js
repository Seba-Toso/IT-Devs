import React, { useState, useEffect } from 'react';
import { auth, useFirebaseApp } from 'reactfire';
import { Redirect, useHistory } from "react-router";
import { firebaseApp, isAuthenticated }  from '../context/firebase';
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
            
            history.push('/backoffice');
        
        }).catch(()=>{
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
                <div className="Container projectSlider section">
                    <div className="container">
                        <div className="login-form">
                        <div className="main-div">
                            <div className="panel mb-5">
                                <img src="../../assets/fullLogo.png" alt="admin" height={'150px'}/>
                            </div>
                            <small>Please enter your e-mail and password</small>
                                <form id="Login" onSubmit={ handleSubmit }>
                                    <div className="form-group">
                                        <input 
                                        type="email" 
                                        className="form-control" 
                                        id="inputEmail" 
                                        placeholder="Email Address"
                                        onChange={ (e) => setEmail( e.target.value )}
                                        required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="inputPassword" 
                                        placeholder="Password"
                                        onChange={ (e) => setPassword( e.target.value )}
                                        required
                                        />
                                    </div>                               
                                    <button 
                                    type="submit" 
                                    className="btn btn-primary mt-5"
                                    >
                                    Login</button>
                                </form>
                        </div>
                                <small className="botto-text"> IT-Devs Web Sites Design.</small>
                        </div>
                    </div>
                </div>    
            </div>

    );
}

export default  Admin;