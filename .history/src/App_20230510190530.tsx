import { useState } from 'react'
import { useFetchPeople } from './hooks/useSwapi'
import './App.css'

function App() {
  const { data, isLoading, isError } = useFetchPeople()
  if (isLoading) return <div>Loading...</div>
  console.log(data)
  return (
    <>
      {data?.results.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </>
  )
}

export default App
