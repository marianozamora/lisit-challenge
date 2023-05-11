import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useEffect } from 'react';
export default function BasicPagination({ count, elementsPerPage }) {
    const [countNum, setCount] = React.useState(1);
    useEffect(() => {
        setCount(count);
    }, [countNum]);
return (
<Stack spacing={2}>
        <Pagination

            className="pagination"
            count={countNum}
            size="large"
            color="primary" />
</Stack>
);
}
