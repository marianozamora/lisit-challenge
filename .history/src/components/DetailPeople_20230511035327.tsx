
import React from 'react'
import { useFetchPerson } from '../hooks/useSwapi'
import { useNavigate, useParams } from 'react-router-dom'

export default function People() {
    const {peopleId} = useParams()
    const [currentId, setCurrentId] = React.useState(peopleId)
    const {data, loading, error} = useFetchPerson(peopleId)
    return (
        <div>
            <h1>People</h1>
        </div>
    )
}

{/* <h1>People</h1>
{loading && <p>Loading...</p>}
{/* {error && <p>Error: {error}</p>} */}
