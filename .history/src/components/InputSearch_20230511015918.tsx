import { Input } from '@mui/material';

export default function InputSearch() {
    return (
        <div>
            <h1>InputSearch</h1>
            <Input
                color='primary'
                variant="outlined"
                style={{ width: '50%' }}
                size='small'
                placeholder="Search" />
        </div>
    )
}