import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'
import react from 'react'

function App() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const { data, isLoading, isError } = useFetchPeople({ page: currentPage})
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      {data?.results.map((person: People) => (
        <div key={person.name}>{person.name}</div>
      ))}
      <button onClick={
        () => {
          setCurrentPage(currentPage + 1)
        }
      } >
        Next
      </button>
      </>

  )
}

export default App
