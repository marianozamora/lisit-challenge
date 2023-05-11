import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function BasicPagination({ count, elementsPerPage }) {
    const [count, setCount] = React.useState(1);
    useEffect(() => {
        setCount(count);
    }, [count]);
return (
<Stack spacing={2}>
        <Pagination

            className="pagination"
            count={count}
            size="large"
            color="primary" />
</Stack>
);
}
