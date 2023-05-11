import { render, screen } from '@testing-library/react';
import People from './People';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


test('renders People component', () => {
    render(<People />);

    const title = screen.getByText('People Here!');
    expect(title).toBeDefined();
});
