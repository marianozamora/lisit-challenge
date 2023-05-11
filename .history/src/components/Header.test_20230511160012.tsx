import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('renders header component with navigation links', () => {
    render(
        <MemoryRouter>
        <Header />
        </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Nerds Fundation' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');

    const navLinks = screen.getAllByRole('link', { name: /people|planets|starships/i });
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].getAttribute('href')).toBe('/');
    expect(navLinks[1].getAttribute('href')).toBe('/people');
    expect(navLinks[2].getAttribute('href')).toBe('/planets');
    });

    test('handles mobile drawer toggle', () => {
    render(
        <MemoryRouter>
        <Header />
        </MemoryRouter>
    );

    const mobileMenuButton = screen.getByLabelText('open drawer');
    expect(mobileMenuButton).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);
    expect(screen.getByText('Nerds Fundation')).toBeInTheDocument();

    fireEvent.click(mobileMenuButton);
    expect(screen.queryByText('Nerds Fundation')).not.toBeInTheDocument();
});
