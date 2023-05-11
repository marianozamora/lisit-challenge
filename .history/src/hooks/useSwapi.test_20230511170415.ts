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
    useGetAllResidents,
} from './your-module'; // Replace 'your-module' with the actual module path

jest.mock('axios');
jest.mock('@tanstack/react-query');

describe('Your Module', () => {
  beforeEach(() => {
    axios.get.mockReset();
    useQuery.mockReset();
  });

  describe('generateRequest', () => {
    it('should make the correct API request and return the data', async () => {
      const mockResponse = { data: 'mocked data' };
      axios.get.mockResolvedValueOnce(mockResponse);

      const result = await generateRequest({ type: 'people', page: 1, query: '' });

      expect(axios.get).toHaveBeenCalledWith('your-api-url/people/?page=1&&search=');
      expect(result).toEqual(mockResponse.data);
    });
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

  describe('generateRequestById', () => {
    it('should make the correct API request and return the data', async () => {
      const mockResponse = { data: 'mocked data' };
      axios.get.mockResolvedValueOnce(mockResponse);

      const result = await generateRequestById({ type: 'people', id: 1 });

      expect(axios.get).toHaveBeenCalledWith('your-api-url/people/1');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('useGenerateRequestById', () => {
    it('should call useQuery with the correct arguments', () => {
      renderHook(() => useGenerateRequestById({ type: 'people', id: 1 }));

      expect(useQuery).toHaveBeenCalledWith({
        queryKey: ['people', 1],
        queryFn: expect.any(Function),
      });
    });
  });

  describe('generateRequestByUrl', () => {
    it('should make the correct API request', async () => {
      const mockResponse = { data: 'mocked data' };
      axios.get.mockResolvedValueOnce(mockResponse);

      const result = await generateRequestByUrl('your-api-url');

      expect(axios.get).toHaveBeenCalledWith('your-api-url');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAllResidents', () => {
    it('should make multiple API requests and return the data', async () => {
      const mockResponses = [
        { data: 'mocked data 1' },
        { data: 'mocked data 2' },
        { data: 'mocked data 3' },
      ];
      axios.get.mockResolvedValueOnce(mockResponses[0]);
      axios.get.mockResolvedValueOnce(mockResponses[1]);
      axios.get.mockResolvedValueOnce(mockResponses[2]);

      const result = await getAllResidents({ residents: ['url1', 'url2', 'url3'] });

      expect(axios.get).toHaveBeenNthCalledWith(1, 'url1');
      expect(axios.get).toHaveBeenNthCalledWith(2, 'url2');
      expect(axios.get).toHaveBeen
