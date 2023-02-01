import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes,  Route } from "react-router-dom";
import "./assets/font/Sarabun/Sarabun-Regular.ttf";
import './index.css';
import Paperbase from './Paperbase';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Paperbase />}></Route>
      <Route path="/authentication" element={<Authentication />}></Route>
    </Routes>
  </BrowserRouter>
);
