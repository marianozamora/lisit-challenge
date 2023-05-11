
import { render } from '@testing-library/react';
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
        <DetailPeople />
        </QueryClientProvider>
    );
    // Add your assertions here to test the rendered output or behavior
    });
});
