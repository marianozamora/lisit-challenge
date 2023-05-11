import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

export async function fetchPeople({page=1}) {
    const { data } = await api.get(`people/?page=${page}`);
    return data;
}

export function useFetchPeople({ page = 1 } = {}) {
    return useQuery({
        queryKey: ['people', { page }]],
        queryFn: () => fetchPeople({ page }),
    })

}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}