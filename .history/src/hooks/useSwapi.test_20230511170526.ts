import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@tanstack/react-query';
import {
    generateRequest,
    useGenerateRequest,
    generateRequestById,
    useGenerateRequestById,
    generateRequestByUrl,
    getAllResidents,
} from './useSwapi'; // Replace 'your-module' with the actual module path

vi.mock('axios');
vi.mock('@tanstack/react-query');

describe('Your Module', () => {
    beforeEach(() => {
        axios.get.mockReset();
        useQuery.mockReset();
    });

    // describe('generateRequest', () => {
    //     it('should make the correct API request and return the data', async () => {
    //         const mockResponse = { data: 'mocked data' };
    //         axios.get.mockResolvedValueOnce(mockResponse);

    //         const result = await generateRequest({ type: 'people', page: 1, query: '' });

    //         expect(axios.get).toHaveBeenCalledWith('your-api-url/people/?page=1&&search=');
    //         expect(result).toEqual(mockResponse.data);
    //     });
    // });

    describe('useGenerateRequest', () => {
        it('should call useQuery with the correct arguments', () => {
            renderHook(() => useGenerateRequest({ type: 'people', page: 1, query: '' }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['people', { page: 1, query: '' }],
                queryFn: expect.any(Function),
            });
        });
    });

    // describe('generateRequestById', () => {
    //     it('should make the correct API request and return the data', async () => {
    //         const mockResponse = { data: 'mocked data' };
    //         axios.get.mockResolvedValueOnce(mockResponse);

    //         const result = await generateRequestById({ type: 'people', id: 1 });

    //         expect(axios.get).toHaveBeenCalledWith('your-api-url/people/1');
    //         expect(result).toEqual(mockResponse.data);
    //     });
    // });

    describe('useGenerateRequestById', () => {
        it('should call useQuery with the correct arguments', () => {
            renderHook(() => useGenerateRequestById({ type: 'people', id: 1 }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['people', 1],
                queryFn: expect.any(Function),
            });
        });
    });

    // describe('generateRequestByUrl', () => {
    //     it('should make the correct API request', async () => {
    //         const mockResponse = { data: 'mocked data' };
    //         axios.get.mockResolvedValueOnce(mockResponse);

    //         const result = await generateRequestByUrl('your-api-url');

    //         expect(axios.get).toHaveBeenCalledWith('your-api-url');
    //         expect(result).toEqual(mockResponse);
    //     });
    // });

});
