import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

async function fetchPeople(page) {
    const { data } = await api.get(`people/?page=${page}`);
    return data;
}

export function useFetchPeople(page) {
    return useQuery(['people'], fetchPeople, {
        
    });
}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}