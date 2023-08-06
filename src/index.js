import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // contain all UI
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css'
//import { createRoot } from 'react-dom/client';
//import Main from './mainpage/Main';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();

