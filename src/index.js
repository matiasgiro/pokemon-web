import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Home from './pages/home';
import Pokemon from './pages/pokemon';
import { AppProvider } from './app-context';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
);


const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);