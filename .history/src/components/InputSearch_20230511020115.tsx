import { Button, Input } from '@mui/material';

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
    return (
        <div>
            <h1>InputSearch</h1>
            <Input
                color='primary'
                variant="outlined"
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