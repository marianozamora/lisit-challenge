import { useState } from 'react'
import { useFetchPeople } from './hooks/useSwapi'
import './App.css'

function App() {
  const { data, isLoading, isError } = useFetchPeople()

  return (
    <>
    </>
  )
}

export default App
