import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PostPage from '../src/pages/PostPage/PostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import PostWritingPage from './pages/PostWritingPage/PostWritingPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="post/test" element={<PostPage />} />
        <Route path="post/test/message" element={<PostWritingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
