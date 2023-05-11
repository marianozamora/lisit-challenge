
import React from 'react'
import { useFetchPerson } from '../hooks/useSwapi'
import { useNavigate, useParams } from 'react-router-dom'

export default function People() {
    const {id} = useParams()
    const [currentId, setCurrentId] = React.useState(id)
    const {data, loading, error} = useFetchPerson(currentId)
    return (
        <div>
        <h1>People</h1>
        </div>
    )
}