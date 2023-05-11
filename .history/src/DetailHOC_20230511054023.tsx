import { useEffect } from 'react';
import { useGenerateRequestById } from '../hooks/useSwapi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const withFetchPerson = (WrappedComponent:any) => {
    return (props:any) => {
        const { peopleId } = useParams();
        const navigate = useNavigate();
        const { data, isLoading } = useGenerateRequestById(
            { type: props.type, id:peopleId });

        useEffect(() => {
        // If you need to perform any additional actions when the peopleId changes
        // you can do it here.
        // For example, if you want to update the person's data when the peopleId changes,
        // you can call the useFetchPerson hook again with the new peopleId.
        }, [peopleId]);

        return (
        <WrappedComponent
            {...props}
            data={data}
            isLoading={isLoading}
            navigate={navigate}
        />
        );
    };
};

const People = ({ data, isLoading, navigate }:any) => {
    return (
        <div>
        <h1>People</h1>
        {isLoading && <p>Loading...</p>}
        {data && (
            <>
            <p>Name: {data.name}</p>
            <p>Height: {data.height}</p>
            </>
        )}
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
            Volver
        </Button>
        </div>
    );
};

export default withFetchPerson(People);