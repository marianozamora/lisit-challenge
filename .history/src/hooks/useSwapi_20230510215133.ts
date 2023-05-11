import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

async function fetchPeople(page) {
    const { data } = await api.get(`people/?page=${1}`);
    return data;
}

export function useFetchPeople(page) {
    return useQuery(['people'], fetchPeople, {
        staleTime: 1000 * 60 * 5,
    });
}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}