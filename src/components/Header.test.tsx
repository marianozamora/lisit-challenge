import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders header component with navigation links', () => {
    render(
        <MemoryRouter>
        <Header />
        </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Nerds Fundation' });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute('href')).toBe('/');

    const navLinks = screen.getAllByRole('link', { name: /people|planets|starships/i });
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].getAttribute('href')).toBe('/');
    expect(navLinks[1].getAttribute('href')).toBe('/planets');
    expect(navLinks[2].getAttribute('href')).toBe('/starships');
    });

    test('handles mobile drawer toggle', () => {
    render(
        <MemoryRouter>
        <Header />
        </MemoryRouter>
    );

    const mobileMenuButton = screen.getByLabelText('open drawer');
    expect(mobileMenuButton).toBeDefined();

});
