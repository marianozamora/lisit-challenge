import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

async function fetchPeople({page=1}) {
    const { data } = await api.get(`people/?page=${page}`);
    return data;
}

export function useFetchPeople(page) {
    return useQuery(['people'], fetchPeople, {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
        keepPreviousData: true,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnInterval: false,
        retry: false,
        retryDelay: 1000,
    });
}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}