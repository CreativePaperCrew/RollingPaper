import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';
import PostCreatingPage from './pages/PostCreatingPage/PostCreatingPage';
import AppLayout from './AppLayout';
import PostWritingPage from './pages/PostWritingPage/PostWritingPage';
import RecipientsPage from './pages/RecipientsPage/RecipientsPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="post" element={<PostCreatingPage />} />
        <Route path="post/:id" element={<RecipientsPage />} />
        <Route path="post/:id/message" element={<PostWritingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
