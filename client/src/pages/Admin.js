import React from 'react';
import './Css/Admin.css';

const Admin = () => {
    return (
            <div>
                <div className='section intro'>
                    <div className='sloganContainer'>
                        <h1 className='sloganText One'>IT-DEVS</h1>
                        <h1 className='sloganText Two'>SECTION</h1>
                        <h1 className='sloganText Three'>ADMIN.</h1>
                    </div>
                </div>
                <div className="Container projectSlider section">
                    <div class="container">
                        <h1 class="form-heading">ACCESS TO BACK-OFFICE</h1>
                        <div class="login-form">
                        <div class="main-div">
                            <div class="panel">
                                <h2>IT-Devs Admin Panel</h2>
                                <img src="../../assets/fullLogo.png" alt="admin" height={'150px'}/>
                                <p>Please enter your e-mail and password</p>
                            </div>
                                <form id="Login">
                                    <div class="form-group">
                                        <input 
                                        type="email" 
                                        class="form-control" 
                                        id="inputEmail" 
                                        placeholder="Email Address"
                                        required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input 
                                        type="password" 
                                        class="form-control" 
                                        id="inputPassword" 
                                        placeholder="Password"
                                        required
                                        />
                                    </div>                               
                                    <button 
                                    type="submit" 
                                    class="btn btn-primary"
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

export default Admin;