import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

interface Params {
    page?: number;
    query?: string;
}

export async function fetchPeople({page, query}: Params ) {
    const { data } = await api.get(`people/?page=${page}&&search=${query}`);
    return data;
}

export function useFetchPeople({ page = 1, query = '' }: Params) {
    return useQuery({
        queryKey: ['people', { page, query }],
        queryFn: () => fetchPeople({ page, query }),
    })

}

export async function fetchPerson(id:any) {
    const { data } = await api.get(`people/${id}`);
    return data;
}

export function useFetchPerson(id:any) {
    return useQuery({
        queryKey: ['person', id],
        queryFn: () => fetchPerson(id),
    })
}
//Planets

export async function fetchPlanets({page, query}: Params ) {
    const { data } = await api.get(`people/?page=${page}&&search=${query}`);
    return data;
}

export function useFetchPlanets({ page = 1, query = '' }: Params) {
    return useQuery({
        queryKey: ['planets', { page, query }],
        queryFn: () => fetchPlanets({ page, query }),
    })

}

export async function fetchPlanet(id:any) {
    const { data } = await api.get(`people/${id}`);
    return data;
}

export function useFetchPlanet(id:any) {
    return useQuery({
        queryKey: ['planet', id],
        queryFn: () => fetchPlanet(id),
    })
}



// try {
//     const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
//     setSearchResults(response.data.results);
// } catch (error) {
//     console.log('Error:', error);
// }


// async function fetchPerson(id) {
//     const { data } = await api.get(`people/${id}`);
//     return data;
// }