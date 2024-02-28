import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PostPage from '../src/pages/PostPage/PostPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmojiPage from './pages/HomePage/EmojiPage/EmojiPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/emojis" element={<EmojiPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/post/test" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
