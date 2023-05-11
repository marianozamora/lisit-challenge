import { useState } from 'react'
import { useFetchPeople } from './hooks/useSwapi'
import './App.css'

function App() {
  const { data, isLoading, isError } = useFetchPeople()
  if (isLoading) return <div>Loading...</div>
  console.log(data)
  return (
    <>
    </>
  )
}

export default App
