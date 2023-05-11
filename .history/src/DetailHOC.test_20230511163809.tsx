import { render, waitFor, screen } from '@testing-library/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGenerateRequestById, useGetAllResidents } from './hooks/useSwapi';
import Entity, { formatString } from './Entity';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  useNavigate: vi.fn(),
}));

vi.mock('./hooks/useSwapi', () => ({
  useGenerateRequestById: vi.fn(),
  useGetAllResidents: vi.fn(),
}));

describe('Entity', () => {
    beforeEach(() => {
        // useParams({ peopleId: '123' });
        // useNavigate.mockReturnValue(vi.fn());
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    test('renders the loading state', async () => {
        vi.spyOn(useGenerateRequestById({
            type: 'people',
            id: '123',
        }), 'mockReturnValue').mockReturnValue({ isLoading: true });

        render(<Entity title="Test Entity" type="people" />);

        expect(screen.getByText('Loading...')).toBeDefined();
        expect(useGenerateRequestById).toHaveBeenCalledWith({
        type: 'people',
        id: '123',
        });
    });

    test('renders the error state', async () => {
        useGenerateRequestById.mockReturnValue({ isError: 'Error message' });

        render(<Entity title="Test Entity" type="people" />);

        await waitFor(() => {
        expect(screen.getByText('Error: Error message')).toBeDefined();
        });

        expect(useGenerateRequestById).toHaveBeenCalledWith({
        type: 'people',
        id: '123',
        });
    });

    test('renders the entity data', async () => {
        const data = { /* Add your test data here */ };
        useGenerateRequestById.mockReturnValue({ data });

        render(<Entity title="Test Entity" type="people" />);

        await waitFor(() => {
        expect(screen.getByText('Test Entity')).toBeDefined();
        // Add additional assertions for the rendered data
        });

        expect(useGenerateRequestById).toHaveBeenCalledWith({
        type: 'people',
        id: '123',
        });
    });

  // Add more test cases as needed
});

describe('formatString', () => {
    test('formats a string correctly', () => {
        const result = formatString('test_string');
        expect(result).toBe('Test String');
    });

  // Add more test cases for different input strings
});
