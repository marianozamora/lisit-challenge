import { render } from '@testing-library/react';
import People from './People';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders People component', () => {
    let queryClient:any;

    beforeEach(() => {
    queryClient = new QueryClient();
    });

    it('renders without error', () => {
    render(
        <QueryClientProvider client={queryClient}>
        <People />
        </QueryClientProvider>
    );
    });
});
