import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AuthContext  from './context/AuthContext';


const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <AuthContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContext>    
);
