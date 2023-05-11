import api from '../api/swapi';

function fetchPeople() {
    const { data } = await api.get('people');
}