/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useGenerateRequestById, useGetAllResidents } from './hooks/useSwapi';
import { useNavigate, useParams } from 'react-router-dom';
import { Button,  } from '@mui/material';
import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '../src/components/Card';
const withFetch = (WrappedComponent:any) => {
    return  (props:any) => {
        const id =  useParams();
        const generalId = id[`${props.type}Id`];
        const navigate = useNavigate();

        const {data, isLoading, error} = useGenerateRequestById(
            { type: props.type, id: generalId });

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
    }
    return (
        <div>
            <Typography
                fontSize={30}
                fontWeight="bold"
                variant="h1">{title}</Typography>
            {isLoading && <p>Loading...</p>}
        {isError && (
            <div>
            {/* <Error /> */}
            {isError && <p>Error: {isError}</p>}

            </div>
        )}
        {data && (
            <>
            <Typography>Name: {data.name}</Typography>
            <Typography>Height: {data.height}</Typography>
            </>
        )}
        {type === 'planets' && (
            <>
                    <Typography
                        textDecoration="underline"
                        fontSize={18}
                        variant="h5">Residents</Typography>
            <div className='grid mx-auto gap-4 p-6 grid-cols-1 md:grid-cols-3'>
            {data2 &&
                data2.data?.map((resident: any, index: number) => (
                    <Card
                        key={index}
                        data={resident}
                        type="people"
                        title={resident.name}
                    />
                ))}
                        </div>
            </>
        )}
        <Button variant="contained" color="primary" onClick={() => navigate(`/${type === 'people'? '': type}`)}>
            Volver
        </Button>
        </div>
    );
};

export default withFetch(Entity);
