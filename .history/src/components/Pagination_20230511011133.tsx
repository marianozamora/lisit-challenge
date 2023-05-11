import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
export default function BasicPagination({ count, currentPage, onPageChange, elementsPerPage }) {
    const [countNum, setCount] = React.useState(null);
    useEffect(() => {
        const countTemp = Math.ceil(count / elementsPerPage);
        setCount(countTemp);
    }, []);
    return (
        <Box
            className="mt-5"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={2}>
            <Pagination
                total={count}
                page={currentPage}
                onChange={onPageChange}
                className="text-white"
                count={countNum}
                size="large"
                color="primary" />
            </Stack>
        </Box>

);
}
