import { render } from '@testing-library/react';
import Starship from './Starship';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders Starship component', () => {
    let queryClient:any;

    beforeEach(() => {
    queryClient = new QueryClient();
    });

    it('renders without error', () => {
    render(
        <QueryClientProvider client={queryClient}>
        <Starship />
        </QueryClientProvider>
    );
    // Add your assertions here to test the rendered output or behavior
    });
});
