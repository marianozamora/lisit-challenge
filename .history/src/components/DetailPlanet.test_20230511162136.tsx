
import { render } from '@testing-library/react';
import DetailPlanet from './DetailPlanet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders DetailPlanet component', () => {
    let queryClient:any;

    beforeEach(() => {
    queryClient = new QueryClient();
    });

    it('renders without error', () => {
        render(
            <QueryClientProvider client={queryClient}>
            <DetailPlanet />
            </QueryClientProvider>
        );
    });
});
