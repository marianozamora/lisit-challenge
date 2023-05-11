import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      errorElement={<ErrorPage />}
      element={<Header />} >
      <Route index element={<People />} />
      <Route path="about" element={<Planets />} />
      <Route path="blog" element={<Starships />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:postId" element={<DetailPost />} />
      <Route path="posts/edit/:postId" element={<PostEdit />} />

      <Route path="add-post" element={<PostEdit />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>,
)
