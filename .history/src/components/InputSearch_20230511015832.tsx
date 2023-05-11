import { Input } from '@mui/material';

export default function InputSearch() {
    return (
        <div>
            <h1>InputSearch</h1>
            <Input
                variant="outlined"
                style={{ width: '50%' }}
                placeholder="Search" />
        </div>
    )
}