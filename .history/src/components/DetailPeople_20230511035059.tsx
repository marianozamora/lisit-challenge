
import React from 'react'
import { useFetchPerson } from '../hooks/useSwapi'
import { useNavigate, useParams } from 'react-router-dom'

export default function People() {
    const {id} = useParams()
    const [currentId, setCurrentId] = React.useState(id)
    console.log('currentId', currentId)
    // const {data, loading, error} = useFetchPerson(currentId)
    return (
        <div>
            <h1>People</h1>
            {/* {loading && <p>Loading...</p>}
            {/* {error && <p>Error: {error}</p>} */}
            {data && (
                <>
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                </>)} */}
        </div>
    )
}