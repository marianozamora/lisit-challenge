/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useGenerateRequestById, useGetAllResidents } from './hooks/useSwapi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const withFetch = (WrappedComponent:any) => {
    return  (props:any) => {
        const id =  useParams();
        const generalId = id[`${props.type}Id`];
        const navigate = useNavigate();

        const {data, isLoading, error} = useGenerateRequestById(
            { type: props.type, id: generalId });

        // const { data, isLoading, isError } = await useGenerateRequestById(
        //
        //const dataResidents = useGetAllResidents({ residents: data });

        useEffect(() => {
            if (error) {
                navigate('/404');
            }
        }, [generalId]);

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

const Entity = ({ data, isLoading, navigate, title, type, isError }: any) => {
    let data2;
    if (type === 'planets' && data !== undefined && data.residents.length > 0) {
        data2 = useGetAllResidents({ residents: data.residents });
        console.log(data2.data);
    }
    return (
        <div>
        <h1>{title}</h1>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error: {isError}</p>}
            {true && <p>Residents: {'data2'}</p>}
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
                        {data2 && data2.data?.map((resident: any, index) => (
                            <p key={index}>{resident.name}</p>
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

export default withFetch(Entity);
