import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../context/firebase';
import swal from 'sweetalert';

class ProtectedRoute extends React.Component {
    constructor() {
        super() 
        this.notAdmin = function notAdmin () {
            swal({
                title: "Acceso denegado.",
                text: "Verifique su acceso de Administrador.",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
        }
    }
   
    render() {
        const Component = this.props.component; 
        return isAuthenticated ? (
            <Component />
        ) : (
            this.notAdmin(),
            <Redirect to={{ pathname: '/admin' }} />
        
        );
    }
}

export default ProtectedRoute;
