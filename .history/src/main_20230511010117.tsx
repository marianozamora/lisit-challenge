import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header.tsx';
import People from './components/People.tsx';
import Planets from './components/Planets.tsx';
import Starships from './components/Starships.tsx';
import DetailPeople from './components/DetailPeople.tsx';
import DetailPlanet from './components/DetailPlanet.tsx';
import DetailStarship from './components/DetailStarship.tsx';
import ErrorPage from './components/ErrorPage.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      errorElement={<ErrorPage />}
      element={<Header />} >
      <Route index element={<People />} />
      <Route path="planets" element={<Planets />} />
      <Route path="starships" element={<Starships />} />
      <Route path="people/:peopleId" element={<DetailPeople />} />
      <Route path="planet/:planetId" element={<DetailPlanet />} />
      <Route path="starships/:starshipId" element={<DetailStarship />} />

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
