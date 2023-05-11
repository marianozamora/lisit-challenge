import { useEffect } from 'react';
import { useGenerateRequestById } from './hooks/useSwapi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const withFetchPerson = (WrappedComponent:any) => {
    return (props:any) => {
        const id = useParams();
        const generalId = id[`${props.type}Id`];
        const navigate = useNavigate();
        const { data, isLoading, isError } = useGenerateRequestById(
            { type: props.type, id: generalId });

        useEffect(() => {
        // If you need to perform any additional actions when the peopleId changes
        // you can do it here.
        // For example, if you want to update the person's data when the peopleId changes,
        // you can call the useFetchPerson hook again with the new peopleId.
        }, [generalId]);

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

const People = ({ data, isLoading, navigate, title, type }:any) => {
    return (
        <div>
        <h1>{title}</h1>
        {isLoading && <p>Loading...</p>}
        {data && (
            <>
            <p>Name: {data.name}</p>
            <p>Height: {data.height}</p>
            </>
        )}
        <Button variant="contained" color="primary" onClick={() => navigate(`/${type}`)}>
            Volver
        </Button>
        </div>
    );
};

export default withFetchPerson(People);
