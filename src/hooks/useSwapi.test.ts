import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@tanstack/react-query';
import {
    useGenerateRequest,
    useGenerateRequestById,
    generateRequestByUrl,
    getAllResidents,
    useGetAllResidents,
} from './useSwapi';

import axios from 'axios';

vi.mock('axios');



vi.mock('../api/swapi', () => {
    const actualApi = vi.importActual('../api/swapi');

    return {
        ...actualApi,
        get: vi.fn().mockResolvedValue({
            data: 'Mocked Data',
        }),
    };

});



vi.mock('@tanstack/react-query', () => ({
    useQuery: vi.fn().mockReturnValue({
        isLoading: false,
        data: {
            count: 1,
            results: [{
                id: '1',
                name: 'Luke Skywalker',
                height: '172',
            }],
        },
        error: undefined,
    }),
}));

describe('use Swapi Methods', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('useGenerateRequest', () => {
        it('should call useQuery with the correct arguments', () => {
            renderHook(() => useGenerateRequest({ type: 'people', page: 1, query: '' }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['people', { page: 1, query: '' }],
                queryFn: expect.any(Function),
            });
        });
    });

    describe('useGenerateRequestById', () => {
        it('should call useQuery with the correct arguments', () => {
            renderHook(() => useGenerateRequestById({
                type: 'people',
                id: '1',
            }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['people', '1'],
                queryFn: expect.any(Function),
            });
        });
    });

    describe('generateRequestByUrl', () => {
    it('should make a GET request with the provided URL', async () => {
        const expectedData = {
            id: '1',
            name: 'Luke Skywalker',
            height: '172',
        };
        const url = 'https://example.com/api/data';

        const axiosGetSpy = vi.spyOn(axios, 'get');


        axiosGetSpy.mockResolvedValue({ data: expectedData });

        const response = await generateRequestByUrl(url);

        expect(axiosGetSpy).toHaveBeenCalledWith(url);
        expect(response.data).toEqual(expectedData);
        axiosGetSpy.mockRestore();
    });
    });

    describe('getAllResidents', () => {
        it('should fetch data for all residents', async () => {
            const residents = ['https://example.com/api/resident/1', 'https://example.com/api/resident/2'];
            const expectedData = [{
                id: '1',
                name: 'Luke Skywalker',
                height: '172',
                residents: ['https://example.com/api/resident/1', 'https://example.com/api/resident/2'],
            }, {
                id: '2',
                name: 'C-3PO',
                height: '167',
                residents: ['https://example.com/api/resident/1', 'https://example.com/api/resident/2'],
            }];

            const axiosGetMock = vi.spyOn(axios, 'get');
            axiosGetMock.mockImplementation((url) => {
            const residentId = url.split('/').pop(); // Extract resident ID from the URL
            const residentData = expectedData.find((data) => data.id === residentId);
            return Promise.resolve({ data: residentData });
            });

            const data = await getAllResidents({ residents });

            expect(axiosGetMock).toHaveBeenCalledTimes(residents.length);
            expect(data).toEqual(expectedData);

            axiosGetMock.mockRestore();
        });
    });
    describe('useGetAllResidents', () => {
        it('should call useQuery with correct queryKey and queryFn', () => {
            const residents = ['https://example.com/api/resident/1', 'https://example.com/api/resident/2'];

            renderHook(() => useGetAllResidents({ residents }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['residents', { residents }],
                queryFn: expect.any(Function),
            });
        });
    });

});







