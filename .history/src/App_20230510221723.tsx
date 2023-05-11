import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'

function App() {
  const { data, isLoading, isError } = useFetchPeople()
  const [currentPage, setCurrentPage] = React.useState(1)
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
