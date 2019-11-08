import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import registerServiceWorker from './registerServiceWorker';
import { FirestoreProvider } from 'react-firestore';
require('dotenv').config();


const root = document.getElementById('root');


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SND_ID
};


firebase.initializeApp(config);

ReactDOM.render(<FirestoreProvider firebase={firebase}> <App /> </FirestoreProvider>, root);
registerServiceWorker();


