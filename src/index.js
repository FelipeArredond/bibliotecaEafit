import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>    
);
