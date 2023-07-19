import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Facebooknavbr from './component/Facebooknavbr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Facebooknavbr/>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

