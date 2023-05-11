import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function BasicPagination() {
return (
<Stack spacing={2}>
        <Pagination
            
            className="pagination"
            count={10}
            size="large"
            color="primary" />
</Stack>
);
}
