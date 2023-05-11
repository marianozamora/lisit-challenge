import { useFetchPeople } from './hooks/useSwapi'
import './App.css'
import { People } from './hooks/types'
import Pagination from '../src/components/Pagination'
import React from 'react'
import { Box, Typography } from '@mui/material';
import Card from './components/Card'
import InputSearch from './components/InputSearch'

function App() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [query, setQuery] = React.useState('')

  const { data, isLoading, isError } = useFetchPeople({ page: currentPage, query})
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
      <div>
        <InputSearch onChange={
          (value) => {
            setQuery(value)
          }
        } />
      </div>
      <Box>
        <div className='grid mx-auto gap-4 p-6 grid-cols-1 md:grid-cols-3'>
            {data?.results.map((person: People, index:string) => (
              <Card
                data={person}
                key={index}

              />

          ))}
        </div>
        {
          isLoading && <div>Loading...</div>
        }
        {
          isError && <div>Error...</div>
        }
        {
          data && data.count === 0 && <div>No results found</div>
        }

        {/* {
          data && data.results.length && (
            <Card
            data={data?.results}
          >

        </Card>
          )
        } */}

      {
        data && data.count > 0 && <Pagination
        onPageChange={(event: any, value: React.SetStateAction<number>)  => {
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
