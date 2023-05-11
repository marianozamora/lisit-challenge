import BasicPagination from './Pagination';
import { fireEvent, render, screen } from '@testing-library/react';

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
    expect(pages.length).not.toBe(Math.ceil(count / elementsPerPage));

    const currentPageButton = screen.getByRole('button', { name: currentPage.toString() });
    expect(currentPageButton).toBeUndefined();

    fireEvent.click(pages[1]);
    expect(onPageChange).toHaveBeenCalledWith(expect.anything(), 2);
});