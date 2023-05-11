import App, { withFetchPeople } from './ListHOC';
import { render, screen } from '@testing-library/react';
import { useGenerateRequest } from './hooks/useSwapi';


vi.mock('./hooks/useSwapi', () => ({
    useGenerateRequest: vi.fn().mockReturnValue({
        data: {
            count: 3,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Person 1',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                    url: 'https://swapi.dev/api/people/1/',
                },
                {
                    name: 'Person 2',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                    url: 'https://swapi.dev/api/people/1/',
                },
                {
                    name: 'Person 3',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                    url: 'https://swapi.dev/api/people/1/',
                }
            ],
        },
        isLoading: false,
        isError: false,
    }),
}));

describe('App', () => {
    beforeEach(() => {
        useGenerateRequest(
            {
                type: 'people',
                page: 1,
                query: '',
            }
        );
    });

    it('renders the App component', () => {
        const WrappedComponent = withFetchPeople(App);
        render(<WrappedComponent type="people" title="People" />);

        expect(screen.getByText('People')).toBeDefined();
        expect(screen.getByText('Person 1')).toBeDefined();
        expect(screen.getByText('Person 2')).toBeDefined();
        expect(screen.getByText('Person 3')).toBeDefined();
    });

    it('renders the App component with search', () => {
        const WrappedComponent = withFetchPeople(App);
        render(<WrappedComponent type="people" title="People" />);

        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeDefined();
    });

    it('renders the App component with pagination', () => {
        const WrappedComponent = withFetchPeople(App);
        render(<WrappedComponent type="people" title="People" />);

        const pagination = screen.getAllByText('1');
        expect(pagination).toBeDefined();
    });

});
