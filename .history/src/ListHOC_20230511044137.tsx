import React from 'react';
import { useFetchPeople } from './hooks/useSwapi';
import './App.css';
import { People } from './hooks/types';
import Pagination from '../src/components/Pagination';
import { Box, Typography } from '@mui/material';
import Card from './components/Card';
import InputSearch from './components/InputSearch';

interface Props {
    window?: () => Window;
}

interface People {
    count: number;
    next: string;
    previous: string;
    results: People[];
}

interface PeopleProps {
    data: People;
    isLoading: boolean;
    isError: boolean;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface WrappedComponentProps {
    data: People;
    isLoading: boolean;
    isError: boolean;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Higher-Order Component for fetching people data
const withFetchPeople = (WrappedComponent: WrappedComponentProps) => {
    return (props: PeopleProps) => {
        const [currentPage, setCurrentPage] = React.useState(1);
        const [query, setQuery] = React.useState('');

        const { data, isLoading, isError } = useFetchPeople({ page: currentPage, query });

        return (
        <WrappedComponent
            {...props}
            data={data}
            isLoading={isLoading}
            isError={isError}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            query={query}
            setQuery={setQuery}
        />
        );
    };
};

// Modified App component with HOC
const App = ({
    data,
    isLoading,
    isError,
    currentPage,
    setCurrentPage,
    query,
    setQuery,
}: PeopleProps) => {
    return (
        <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h3" component="div" gutterBottom>
            Star Wars
            </Typography>
        </Box>
        <div>
            <InputSearch onChange={(value) => setQuery(value)} />
        </div>
        <Box>
            <div className='grid mx-auto gap-4 p-6 grid-cols-1 md:grid-cols-3'>
            {data?.results.map((person: People, index: number) => (
                <Card data={person} key={index} />
            ))}
            </div>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            {data && data.count === 0 && <div>No results found</div>}

            {data && data.count > 0 && (
            <Pagination
                onPageChange={(event: any, value: React.SetStateAction<number>) => {
                setCurrentPage(value);
                }}
                count={data?.count}
                elementsPerPage={10}
                currentPage={currentPage}
            />
            )}
        </Box>
        </>
    );
};

export default withFetchPeople(App);
