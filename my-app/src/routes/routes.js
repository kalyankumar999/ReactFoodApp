import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/DashBoard';
import Order from '../pages/Order';

const routes = () => {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/order' element={<Order/>} />
    </Routes>
  )
}

export default routes