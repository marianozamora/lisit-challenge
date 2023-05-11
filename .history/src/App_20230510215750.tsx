import { useState } from 'react'
import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'

function App() {
  const { data, isLoading, isError } = useFetchPeople({ page: 1})
  console.log(data)
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      {data?.results.map((person: People) => (
        <div key={person.name}>{person.name}</div>
      ))}
      <button onClick={
        () => {
          const { data } = useFetchPeople({ page: 2 })
          console.log(data)
        }
      } >
        Next
      </button>
      </>

  )
}

export default App
