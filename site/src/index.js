import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/inicio/App';
import Add from './pages/add/add';
import Consulta from './pages/Consultar/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}   />
      <Route path="/add" element={<Add />} />
      <Route path="/consultar" element={<Consulta />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

