import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav/Nav';
// import Info from './Infor/Infor'
import Info from './Infor/InforAsync'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Info/>
  </React.StrictMode>
);
