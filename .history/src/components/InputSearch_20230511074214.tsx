import { Button, Input } from '@mui/material';
import { useState } from 'react';

interface Props {
    onChange?: (searchTerm : string) => void;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    searchTerm?: string;
    isLoading?: boolean;
    searchResults?: any[];
    handleChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit?: (event: Event) => void;
}

interface Event {
    target: HTMLInputElement;
    preventDefault: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// const PartialProps = Partial<Props>;

export default function InputSearch({
    onChange,
}:Props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        //setIsLoading(true);
        if (onChange) {
            onChange(searchTerm);
        }
        //setIsLoading(false);
    };
    return (
        <div>
            <Input
                type="text"
                value={searchTerm}
                onChange={(event)=>handleChange(event)} 
                color='primary'
                style={{ width: '50%' }}
                size='small'
                className='mr-4'
                placeholder="Search" />
            <Button
                variant="contained"
                color="primary"
                onClick={(e)=>handleSubmit(e)}
            >Buscar</Button>
        </div>
    )
}