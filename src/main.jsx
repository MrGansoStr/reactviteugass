import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style/index.css';
import { axiosInterceptor } from './interceptors/axiosInterceptor';

axiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render( <App /> );
