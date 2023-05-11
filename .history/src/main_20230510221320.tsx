import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from ' @tanstack/react-query-devtools';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>,
)
