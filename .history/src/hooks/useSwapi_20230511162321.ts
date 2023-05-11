import axios from 'axios';
import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

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

export function generateRequestByUrl (url: any) {
    return axios.get(url);
}

export async function getAllResidents({ residents }: any) {
    const responses = await Promise.all(residents.map((url : string) => generateRequestByUrl(url)));
    const data = responses.map(response => response.data);
    return data;
}

export function useGetAllResidents({ residents }: any) {
    return useQuery({
        queryKey: ['residents', {residents}],
        queryFn: () => getAllResidents({ residents: residents }),
    })
}
