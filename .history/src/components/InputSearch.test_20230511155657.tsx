import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputSearch from './InputSearch';

test('renders input search component and handles input change and submit', () => {
    const onChange = vi.fn();

    render(<InputSearch onChange={onChange} />);

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeDefined();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toBe('test');
    expect(onChange).toHaveBeenCalledWith('test');

    const searchButton = screen.getByRole('button', { name: 'Buscar' });
    expect(searchButton).toBeDefined();

    fireEvent.click(searchButton);
    expect(onChange).toHaveBeenCalledTimes(2);
});
