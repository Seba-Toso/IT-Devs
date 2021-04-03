import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './context/firebase';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
<FirebaseAppProvider firebaseApp = { firebaseApp }>
<App />
</FirebaseAppProvider>, document.getElementById('root'));
registerServiceWorker();
