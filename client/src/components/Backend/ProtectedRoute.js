import React from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../context/firebase';

class ProtectedRoute extends React.Component {


    render() {
        const Component = this.props.component; 
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;
