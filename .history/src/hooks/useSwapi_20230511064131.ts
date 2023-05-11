import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

interface Params {
    page?: number;
    query?: string;
    type?: string;
}

//
export async function generateRequest({type, page, query}: any) {
    const { data } = await api.get(`${type}/?page=${page}&&search=${query}`);
    return data;
}

export function useGenerateRequest({ type = 'people', page = 1, query = '' }: any) {
    return useQuery({
        queryKey: [type, { page, query }],
        queryFn: () => generateRequest({ type, page, query }),
    })
}

export async function generateRequestById({ type, id }: any) {
    const { data } = await api.get(`${type}/${id}`);
    return data;
}

export function useGenerateRequestById({ type = 'people', id }: any) {

    return useQuery({
        queryKey: [type, id],
        queryFn: () => generateRequestById({ type, id }),
    })
}
export function generateRequestByUrl ({ url }: any) {
    return api.get(url);
}

export async function getAllResidents({ urls }: any) {
    const responses = await Promise.all(urls.map((url : string) => generateRequestByUrl(url)));
    const data = responses.map(response => response.data);
    return data;
}

export function useGetAllResidents(data: any) {
    console.log(data.residents.residents)
    return useQuery({
        queryKey: ['residents', data.residents.residents],
        queryFn: () => getAllResidents({ urls: data.residents })
    })
}

// export async function generateRequestByUrl({ url }: any) {
//     const { data } = await api.get(url);
//     return data;
// }

// When dealing with multiple HTTP GET requests in Axios, you can utilize either Promise-based or asynchronous approaches to manage the requests. Here's an example using the Promise-based approach:

// jsx
// Copy code
// import axios from 'axios';

// const fetchMultipleData = async () => {
//     const urls = [
//         'https://api.example.com/data1',
//         'https://api.example.com/data2',
//         'https://api.example.com/data3',
//         // Add more URLs as needed
//     ];

//     try {
//         const responses = await Promise.all(urls.map(url => axios.get(url)));
//         const data = responses.map(response => response.data);
//         // Process the data obtained from each response
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//         // Handle the error
//     }
// };

// fetchMultipleData();
// People
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

// export async function fetchPlanets({page, query}: Params ) {
//     const { data } = await api.get(`planet/?page=${page}&&search=${query}`);
//     return data;
// }

// export function useFetchPlanets({ page = 1, query = '' }: Params) {
//     return useQuery({
//         queryKey: ['planets', { page, query }],
//         queryFn: () => fetchPlanets({ page, query }),
//     })

// }

// export async function fetchPlanet(id:any) {
//     const { data } = await api.get(`planet/${id}`);
//     return data;
// }

// export function useFetchPlanet(id:any) {
//     return useQuery({
//         queryKey: ['planet', id],
//         queryFn: () => fetchPlanet(id),
//     })
// }
