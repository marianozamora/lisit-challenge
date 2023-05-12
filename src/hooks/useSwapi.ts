import axios from 'axios';
import api from '../api/swapi';
import { useQuery } from '@tanstack/react-query';

interface IGenerateRequest {
    type: string;
    page: number;
    query: string;
}

interface IGenerateRequestById {
    type: string;
    id: string;
}

interface IGetAllResidents {
    residents: string[];
}

export async function generateRequest({type, page, query}: IGenerateRequest) {
    const { data } = await api.get(`${type}/?page=${page}&&search=${query}`);
    return data;
}

export function useGenerateRequest({ type = 'people', page = 1, query = '' }: IGenerateRequest) {
    return useQuery({
        queryKey: [type, { page, query }],
        queryFn: () => generateRequest({ type, page, query }),
    })
}

export async function generateRequestById({ type, id }: IGenerateRequestById) {
    const { data } = await api.get(`${type}/${id}`);
    return data;
}

export function useGenerateRequestById({ type = 'people', id }: IGenerateRequestById) {

    return useQuery({
        queryKey: [type, id],
        queryFn: () => generateRequestById({ type, id }),
    })
}

export function generateRequestByUrl (url: string) {
    return axios.get(url);
}

export async function getAllResidents({ residents }: IGetAllResidents) {
    const responses = await Promise.all(residents.map((url : string) => generateRequestByUrl(url)));
    const data = responses.map(response => response.data);
    return data;
}

export function useGetAllResidents({ residents }: IGetAllResidents) {
    return useQuery({
        queryKey: ['residents', {residents}],
        queryFn: () => getAllResidents({ residents: residents }),
    })
}
