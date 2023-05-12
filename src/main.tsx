import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.tsx';
import { Layout } from './components/Layout';
import ListHOC from "./ListHOC";
import DetailHOC from './DetailHOC';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      errorElement={<ErrorPage />}
      element={<Layout />} >
      <Route index element={
          <ListHOC
              title='People List!!'
              type='people'
          />
      } />
      <Route path="planets" element={
          <ListHOC
          title='Planets Here!'
          type='planets'
          />
      } />
      <Route path="starships" element={
          <ListHOC
          title='Starships Here!!'
          type='starships'
          />
      } />
      <Route path="people/:peopleId" element={
          <DetailHOC
          title='People Detail!'
          type='people'
          />
      } />
      <Route path="planets/:planetsId" element={
        <DetailHOC
          title='Planet Detail'
          type='planets'
        />
      } />
      <Route path="starships/:starshipsId" element={
        <DetailHOC
          title='Starship Detail'
          type='starships'
        />
      } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>,
)
