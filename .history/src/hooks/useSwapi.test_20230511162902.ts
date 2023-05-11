import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import api from '../api/swapi';

import {
  generateRequest,
  generateRequestById,
  generateRequestByUrl,
} from './useSwapi';

vi.mock('axios');
vi.mock('../api/swapi');

describe('Your Test Suite Name', () => {
    describe('generateRequest', () => {
        test('should return the expected data', async () => {
            const mockData = { name: 'Luke Skywalker' };
            axios.get.mockResolvedValueOnce({ data: mockData });

            const result = await generateRequest({ type: 'people', page: 1, query: ''});

            expect(result).toEqual(mockData);
            expect(axios.get).toHaveBeenCalledWith(['people', { page: 1, query: '' }]);
        });
    });


});