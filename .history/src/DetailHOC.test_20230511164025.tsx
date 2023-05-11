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
        }), 'data').mockReturnValue({ isLoading: true });

        render(<Entity title="Test Entity" type="people" />);

        expect(screen.getByText('Loading...')).toBeDefined();
        expect(useGenerateRequestById).toHaveBeenCalledWith({
        type: 'people',
        id: '123',
        });
    });

});

describe('formatString', () => {
    test('formats a string correctly', () => {
        const result = formatString('test_string');
        expect(result).toBe('Test String');
    });
});
