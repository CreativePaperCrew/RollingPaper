import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import PostPage from '../src/pages/PostPage/PostPage';
import PostCreatingPage from './pages/PostCreatingPage/PostCreatingPage';
import AppLayout from './AppLayout';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="post/test" element={<PostPage />} />
        <Route path="/post" element={<PostCreatingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
