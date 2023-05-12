import { render, screen, fireEvent } from '@testing-library/react';
import InputSearch from './InputSearch';

describe('InputSearch', () => {
    it('should call the onChange handler with the entered search term on form submission', () => {
        const mockOnChange = vi.fn();
        render(<InputSearch onChange={mockOnChange} />);

        const inputElement = screen.getByPlaceholderText('Search');
        const searchButton = screen.getByText('Buscar');

        fireEvent.change(inputElement, { target: { value: 'test' } });
        fireEvent.click(searchButton);

        expect(mockOnChange).toHaveBeenCalledWith('test');
    });
});
