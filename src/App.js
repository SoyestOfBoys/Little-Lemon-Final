import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Res from './pages/Reservations';
import LoginNew from './login_components/LoginNew';
import NewAccountGood from './login_components/NewAccountGood';
import OrderGood from './order_components/OrderGood';
import ResGood from './reservations_components/ResGood';

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
        <Route path='loginnew' element={<LoginNew />} />
        <Route path='newaccountgood' element={<NewAccountGood />} />
        <Route path='ordergood' element={<OrderGood />} />
        <Route path='resgood' element={<ResGood />} />
      </Routes>
    </div>
  );
}