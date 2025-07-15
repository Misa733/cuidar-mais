import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Register from '../src/pages/Register';
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';

const RouterPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RouterPages;
