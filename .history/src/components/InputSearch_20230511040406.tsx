import { Button, Input } from '@mui/material';
import { useState } from 'react';

interface Props {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    searchTerm?: string;
    isLoading?: boolean;
    searchResults?: any[];
    handleChange?: (event: Event) => void;
}

interface Event {
    target: HTMLInputElement;
    preventDefault: () => void;
    onChange: any;
}

// const PartialProps = Partial<Props>;

export default function InputSearch({
    onChange,
}:Props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event: Event) => {
    setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event:Event) => {
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
                color="primary"
                onClick={handleSubmit}
            >Buscar</Button>
        </div>
    )
}