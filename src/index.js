import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // contain all UI
//import Main from './mainpage/Main';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="home" />);

reportWebVitals();



// const root = ReactDOM.createRoot(document.getElementById('root')); // root rendering tag-> public-> index.html
// root.render(
//   <React.StrictMode>
//     <App /> 
    
//   </React.StrictMode>
// );
//app contain all of UI
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
