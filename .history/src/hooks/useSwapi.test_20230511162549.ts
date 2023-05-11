import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import api from '../api/swapi';

import {
  generateRequest,
  generateRequestById,
  generateRequestByUrl,
} from './useSwapi';

// Mock the axios library and api module
vi.mock('axios');
vi.mock('../api/swapi');

describe('Your Test Suite Name', () => {
    // Test cases for generateRequest function
    describe('generateRequest', () => {
        test('should return the expected data', async () => {
            const mockData = { /* Add your mock data here */ };
            axios.get.mockResolvedValueOnce({ data: mockData });

            const result = await generateRequest({ /* Add your test parameters here */ });

            expect(result).toEqual(mockData);
            expect(axios.get).toHaveBeenCalledWith(/* Add the expected URL here */);
        });
    });

    // Test cases for useGenerateRequest hook
    describe('useGenerateRequest', () => {
        test('should return the expected data using useQuery', async () => {
            const mockData = { /* Add your mock data here */ };
            const queryKey = [/* Add your test parameters here */];
            useQuery.mockReturnValueOnce({ data: mockData });

            render(<YourComponentThatUsesUseGenerateRequest />);

      expect(useQuery).toHaveBeenCalledWith({ queryKey, queryFn: expect.any(Function) });
            expect(screen.getByText(/* Add your expected text or element here */)).toBeInTheDocument();
        });
    });

    // Test cases for generateRequestById function
    describe('generateRequestById', () => {
        test('should return the expected data', async () => {
            const mockData = { /* Add your mock data here */ };
            axios.get.mockResolvedValueOnce({ data: mockData });

            const result = await generateRequestById({ /* Add your test parameters here */ });

            expect(result).toEqual(mockData);
            expect(axios.get).toHaveBeenCalledWith(/* Add the expected URL here */);
        });
    });

    // Test cases for useGenerateRequestById hook
    describe('useGenerateRequestById', () => {
        test('should return the expected data using useQuery', async () => {
            const mockData = { /* Add your mock data here */ };
            const queryKey = [/* Add your test parameters here */];
            useQuery.mockReturnValueOnce({ data: mockData });

            render(<YourComponentThatUsesUseGenerateRequestById />);

      expect(useQuery).toHaveBeenCalledWith({ queryKey, queryFn: expect.any(Function) });
            expect(screen.getByText(/* Add your expected text or element here */)).toBeInTheDocument();
        });
    });

    // Test cases for generateRequestByUrl function
    describe('generateRequestByUrl', () => {
        test('should return the expected data', async () => {
            const mockData = { /* Add your mock data here */ };
            axios.get.mockResolvedValueOnce({ data: mockData });

            const result = await generateRequestByUrl(/* Add your test URL here */);

            expect(result).toEqual(mockData);
            expect(axios.get).toHaveBeenCalledWith(/* Add the expected URL here */);
        });
    });

});