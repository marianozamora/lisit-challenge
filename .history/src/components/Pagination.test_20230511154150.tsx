import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicPagination from './BasicPagination';

test('renders pagination component with correct count and current page', () => {
    const onPageChange = vi.fn();
    const count = 100;
    const currentPage = 1;
    const elementsPerPage = 10;

    render(
        <BasicPagination
        count={count}
        currentPage={currentPage}
        onPageChange={onPageChange}
        elementsPerPage={elementsPerPage}
        />
    );

    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeDefined();

    const pages = screen.getAllByRole('button');
    expect(pages.length).toBe(Math.ceil(count / elementsPerPage));

    const currentPageButton = screen.getByRole('button', { name: currentPage.toString() });
    expect(currentPageButton).to('Mui-selected');

    userEvent.click(pages[1]);
    expect(onPageChange).toHaveBeenCalledWith(expect.anything(), 2);
});
