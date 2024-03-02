import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PostPage from '../src/pages/PostPage/PostPage';
import ListPage from './pages/ListPage/ListPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import RecipientsPage from './pages/RecipientsPage/RecipientsPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="post/test" element={<PostPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post/:id" element={<RecipientsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
