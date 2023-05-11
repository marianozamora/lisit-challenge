import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@tanstack/react-query';
import {
    useGenerateRequest,
    useGenerateRequestById,
} from './useSwapi';
vi.mock('axios');
vi.mock('@tanstack/react-query');

describe('Your Module', () => {
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
            renderHook(() => useGenerateRequestById({ type: 'people', id: 1 }));

            expect(useQuery).toHaveBeenCalledWith({
                queryKey: ['people', 1],
                queryFn: expect.any(Function),
            });
        });
    });
});
