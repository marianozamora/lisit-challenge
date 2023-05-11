import { render } from '@testing-library/react';
import Planets from './Planets';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders Planets component', () => {
    let queryClient:any;

    beforeEach(() => {
    queryClient = new QueryClient();
    });

    it('renders without error', () => {
    render(
        <QueryClientProvider client={queryClient}>
        <Planets />
        </QueryClientProvider>
    );
    // Add your assertions here to test the rendered output or behavior
    });
});
