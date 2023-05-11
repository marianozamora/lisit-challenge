import { render, waitFor, screen } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenerateRequestById, useGetAllResidents } from './hooks/useSwapi';
import Entity, { formatString } from './DetailHOC';

vi.mock('react-router-dom', () => ({
    useParams: vi.fn(),
    useNavigate: vi.fn(),
}));

vi.mock('./hooks/useSwapi', () => ({
    useGenerateRequestById: vi.fn(),
    useGetAllResidents: vi.fn(),
}));


describe('formatString', () => {
    test('formats a string correctly', () => {
        const result = formatString('test_string');
        expect(result).toBe('Test String');
    });
});
