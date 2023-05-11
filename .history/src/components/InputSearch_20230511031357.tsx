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
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    debugger;
    onChange(searchTerm);
    setIsLoading(false);
    };
    // <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for people" />

    return (
        <div>
            <h1>InputSearch</h1>
            <Input
                type="text"
                value={searchTerm}
                onChange={handleChange} 
                color='primary'
                style={{ width: '50%' }}
                size='small'
                placeholder="Search" />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >Buscar</Button>
        </div>
    )
}