import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useEffect } from 'react';

export default function BasicPagination({ count, elementsPerPage }) {
    const [countNum, setCount] = React.useState(1);
    useEffect(() => {
        const countTemp = Math.ceil(count / elementsPerPage);
        setCount(countTemp);
    }, [countNum]);
    return (
        <Stack spacing={2}>
            <Pagination
                current={currentPage}
                onChange={(event, value) => {
                    console.log(value);
                }}
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