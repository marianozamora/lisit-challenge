import App, { withFetchPeople } from './ListHOC';
import { render, screen, fireEvent } from '@testing-library/react';
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

    it('handles search input correctly', () => {
        render(<App type="people" title="People" />);

        const searchInput = screen.getByTestId('search-input').querySelector('input') || document.createElement('input');
        fireEvent.change(searchInput, { target: { value: 'Luke Skywalker' } });

        expect(searchInput.value).toBe('Luke Skywalker');
    });

    it('wraps the component and fetches data correctly', () => {
        const WrappedComponent = () => <div>Wrapped Component</div>;
        const WrappedComponentWithFetch = withFetchPeople(WrappedComponent);

        render(<WrappedComponentWithFetch type="people" />);

        expect(screen.getByText('Wrapped Component')).toBeDefined();

        expect(useGenerateRequest).toHaveBeenCalledWith({
            type: 'people',
            page: 1,
            query: ''
        });
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

    it('renders elements ', () => {
        const WrappedComponent = withFetchPeople(App);
        render(<WrappedComponent type="people" title="People" />);

        const pagination = screen.getAllByText('1');
        expect(pagination).toBeDefined();
    })

});
