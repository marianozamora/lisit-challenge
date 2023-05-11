import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';

test('renders layout component with header and children', () => {
    render(
        <MemoryRouter>
        <Layout>
            <div>Content</div>
        </Layout>
        </MemoryRouter>
    );

    const header = screen.getByRole('open', { name: 'Nerds Fundation' });
    expect(header).toBeDefined();

    const content = screen.getByText('Content');
    expect(content).toBeDefined();
});
