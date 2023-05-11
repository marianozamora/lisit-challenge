import { Button, Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

export default function InputSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
    setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
        const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
        setSearchResults(response.data.results);
    } catch (error) {
        console.log('Error:', error);
    }

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
            {isLoading ? (
            <div>Loading...</div>
            ) : (
                <ul>
                {searchResults.map((result) => (
                    <li key={result.url}>{result.name}</li>
                ))}
                </ul>
            )}
        </div>
    )
}