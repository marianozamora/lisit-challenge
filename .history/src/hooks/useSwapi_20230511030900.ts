import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

interface Params {
    page?: number;
    query?: string;
}

export async function fetchPeople({page, query}: Params ) {
    const { data } = await api.get(`people/?page=${page}&&query=${query}`);
    return data;
}

export function useFetchPeople({ page = 1, query = '' }: Params) {
    return useQuery({
        queryKey: ['people', { page, query }],
        queryFn: () => fetchPeople({ page, query }),
    })

}

async function fetchPerson(id) {
    const { data } = await api.get(`people/${id}`);
    return data;
}