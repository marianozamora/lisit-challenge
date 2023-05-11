import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useEffect } from 'react';

export default function BasicPagination({ count, currentPage, onPageChange, elementsPerPage }) {
    const [countNum, setCount] = React.useState(null);
    useEffect(() => {
        const countTemp = Math.ceil(count / elementsPerPage);
        setCount(countTemp);
    }, []);
    return (
        <Stack spacing={2}>
            <Pagination
                classes={{ ul: 'pagination' }}
                total={count}
                page={currentPage}
                onChange={onPageChange}
                className="pagination"
                count={countNum}
                size="large"
                color="primary" />
        </Stack>

);
}
