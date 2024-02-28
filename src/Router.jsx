import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmojiPage from './pages/HomePage/EmojiPage/EmojiPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/emojis" element={<EmojiPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
