import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Post from '../src/pages/Post/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
