
import { useFetchPerson } from '../hooks/useSwapi'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@mui/material'

interface Props {
    window?: () => Window;
}

export default function People() {
    const { peopleId } = useParams()
    const navigate = useNavigate()
    // const [currentId, setCurrentId] = React.useState(peopleId)
    const {data, isLoading} = useFetchPerson(peopleId)
    return (
        <div>
            <h1>People</h1>
            {isLoading && <p>Loading...</p>}
            {/* {error && <p>Error: {error}</p>} */}
            {data && (
                <>
                    <p>Name: {data.name}</p>
                    <p>Height: {data.height}</p>
                </>)}
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >Volver</Button>

        </div>
    )
}

{/* <h1>People</h1>
{loading && <p>Loading...</p>}
{/* {error && <p>Error: {error}</p>} */}
