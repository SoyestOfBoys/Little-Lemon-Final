import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Res from './pages/Reservations';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='login' element={<Login />}  />
        <Route path='menu' element={<Menu />} />
        <Route path='order' element={<Order />} />
        <Route path='reservations' element={<Res />} />
      </Routes>
    </div>
  );
}