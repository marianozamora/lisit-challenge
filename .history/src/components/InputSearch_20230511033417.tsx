import { Button, Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

interface Props {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    searchTerm?: string;
    isLoading?: boolean;
    searchResults?: any[];
}

// const PartialProps = Partial<Props>;

export default function InputSearch({
    onChange,
}:Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    onChange(searchTerm);
    setIsLoading(false);
    };
    return (
        <div>
            <Input
                type="text"
                value={searchTerm}
                onChange={handleChange} 
                color='primary'
                style={{ width: '50%' }}
                size='small'
                className='mr-4'
                placeholder="Search" />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >Buscar</Button>
        </div>
    )
}