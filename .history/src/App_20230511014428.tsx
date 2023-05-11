import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'
import React from 'react'
import { Box, Typography } from '@mui/material';
import Card from './components/Card'


function App() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const { data, isLoading, isError } = useFetchPeople({ page: currentPage})
  //if (isLoading) return <div>Loading...</div>

  // if (data && data.count === null) {
  //   return null; // or display a different message or loading state
  // }


  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h3" component="div" gutterBottom>
          Star Wars
        </Typography>
      </Box>
    <Box>
      {data?.results.map((person: People) => (
        <div key={person.name}>{person.name}</div>
      ))}
      {/* <button onClick={
        () => {
          setCurrentPage(currentPage + 1)
        }
      } >
        Next
      </button> */}

      {
        data && data.count > 0 && <Pagination
        onPageChange={(event, value) => {
          setCurrentPage(value)
        }}
        count={data?.count}
        elementsPerPage={10}
        currentPage={currentPage}
      />

      }

      </Box>
    </>

  )
}

export default App
