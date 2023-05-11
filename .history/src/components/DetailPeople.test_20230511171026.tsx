
import { render, screen } from '@testing-library/react';
import DetailPeople from './DetailPeople';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders DetailPeople component', () => {
    let queryClient:any;

    beforeEach(() => {
    queryClient = new QueryClient();
    });

    it('renders without error', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <DetailPeople
                />
            </QueryClientProvider>
        );
        expect(screen.getAllByText('People Detail!')).toBeDefined();
        
    });
});
