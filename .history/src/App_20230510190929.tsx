import { useState } from 'react'
import { useFetchPeople } from './hooks/useSwapi'
import './App.css'

function App() {
  const { data, isLoading, isError } = useFetchPeople()
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      {data?.results.map((person: People) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </>
  )
}

export default App
