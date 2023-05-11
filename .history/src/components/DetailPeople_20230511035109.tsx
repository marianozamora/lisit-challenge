
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
  
        </div>
    )
}