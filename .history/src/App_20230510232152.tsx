import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'
import React from 'react'
import { Box, Typography } from  '@mui/material'
function App() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const { data, isLoading, isError } = useFetchPeople({ page: currentPage})
  if (isLoading) return <div>Loading...</div>
  return (
    <>
      
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h3" component="div" gutterBottom>
          Star Wars
        </Typography>
      </Box>
      {console.log(currentPage)}
      <Pagination
        onPageChange={(event, value) => {
          setCurrentPage(value)
        }}
        count={data?.count}
        elementsPerPage={10}
        currentPage={currentPage}
      />
    </>

  )
}

export default App
