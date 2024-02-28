import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PostPage from '../src/pages/PostPage/PostPage';
import ListPage from './pages/ListPage/ListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
