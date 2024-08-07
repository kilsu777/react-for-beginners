import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App6';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("Done");

// <BrowserRouter basename={process.env.PUBLIC_URL}>
//   <App />
// </BrowserRouter>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
