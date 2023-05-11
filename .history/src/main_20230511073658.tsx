import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starship';
import DetailPeople from './components/DetailPeople';
import DetailPlanet from './components/DetailPlanet';
import DetailStarship from './components/DetailStarship';
import ErrorPage from './components/ErrorPage.tsx';
import { Layout } from './components/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      errorElement={<ErrorPage />}
      element={<Layout />} >
      <Route index  element={<People />} />
      <Route path="planets" element={<Planets />} />
      <Route path="starships" element={<Starships />} />
      <Route path="people/:peopleId" element={<DetailPeople />} />
      <Route path="planets/:planetsId" element={<DetailPlanet />} />
      <Route path="starships/:starshipsId" element={<DetailStarship />} />
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
