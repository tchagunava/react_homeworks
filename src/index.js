import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Axios } from './Axios';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Axios /> */}
  </React.StrictMode>
);

