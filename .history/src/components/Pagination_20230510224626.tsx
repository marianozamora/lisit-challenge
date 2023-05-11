import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useEffect } from 'react';

export default function BasicPagination({ count, elementsPerPage }) {
    const [countNum, setCount] = React.useState(1);
    useEffect(() => {
        const countTemp = Math.ceil(count / elementsPerPage);
        setCount(countTemp);
    }, []);
    return (
        <Stack spacing={2}>
            <Pagination
                current={currentPage}
                total={totalPages}
                onChange={onPageChange}
                className="pagination"
                count={countNum}
                size="large"
                color="primary" />
        </Stack>

);
}

{/* <Stack spacing={2}>
        <Pagination
            onChange={(event, value) => {
                console.log(value);
            }}
            className="pagination"
            count={countNum}
            size="large"
            color="primary" />
</Stack> */}