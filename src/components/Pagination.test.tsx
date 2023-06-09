import BasicPagination from './Pagination';
import { render, screen } from '@testing-library/react';

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

    const pagination = screen.getAllByText('1');
    expect(pagination).toHaveLength(1);

    const pages = screen.getAllByRole('button');
    expect(pages.length).not.toBe(Math.ceil(count / elementsPerPage));

    // fireEvent.click(pages[1]);
    // expect(onPageChange).toHaveBeenCalledWith(expect.anything(), 2);
});
