import { useEffect } from 'react';
import { useGenerateRequestById, useGetAllResidents } from './hooks/useSwapi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { isError } from '@tanstack/react-query';

const withFetchPerson = (WrappedComponent:any) => {
    return  (props:any) => {
        const id =  useParams();
        const generalId = id[`${props.type}Id`];
        const navigate = useNavigate();
        // const getFetch = async () => {
        //     const { data, isLoading, error } = await useGenerateRequestById(
        //         { type: props.type, id: generalId });
        //     return { data, isLoading, error };
        // };
        // const { data, isLoading, error } = getFetch();

        // console.log(data)
        const {data, isLoading, error} = useGenerateRequestById(
            { type: props.type, id: generalId });

        // const { data, isLoading, isError } = await useGenerateRequestById(
        //
        //const dataResidents = useGetAllResidents({ residents: data });
        if (props.type === 'planets' && !!data  ) {
            const dataResidents = useGetAllResidents({ residents: data.residents });
        }

        useEffect(() => {
        // If you need to perform any additional actions when the peopleId changes
        // you can do it here.
        // For example, if you want to update the person's data when the peopleId changes,
        // you can call the useFetchPerson hook again with the new peopleId.
        }, [generalId, data]);

        return (
        <WrappedComponent
                {...props}
                isError={error}
            data={data}
            isLoading={isLoading}
            navigate={navigate}
        />
        );
    };
};

const People = ({ data, isLoading, navigate, title, type, isError }:any) => {
    return (
        <div>
        <h1>{title}</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {isError}</p>}
        {data && (
            <>
            <p>Name: {data.name}</p>
            <p>Height: {data.height}</p>
            </>
            )}
            {
                type === 'planets' && (
                    <>
                        <h1>Residents</h1>
                        {['asda']?.map((resident: any, index) => (
                            <p key={index}>{resident}</p>
                        ))}
                    </>
                )  
            }
        <Button variant="contained" color="primary" onClick={() => navigate(`/${type}`)}>
            Volver
        </Button>
        </div>
    );
};

export default withFetchPerson(People);
