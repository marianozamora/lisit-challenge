import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

async function fetchPeople() {
    const { data } = await api.get('people');
    return data;
}

export function useFetchPeople() {
    return useQuery(['people'], fetchPeople);
}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}