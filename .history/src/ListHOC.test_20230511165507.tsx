import App, { withFetchPeople } from './ListHOC';
import { render, screen } from '@testing-library/react';
import { useGenerateRequest } from './hooks/useSwapi';

const mockData = {
    count: 3,
    next: '',
    previous: '',
    results: [
    { name: 'Person 1' },
    { name: 'Person 2' },
    { name: 'Person 3' },
    ],
};

vi.mock('./hooks/useSwapi', () => ({
    useGenerateRequest: vi.fn().mockReturnValue({
        data: mockData,
        isLoading: false,
        isError: false,
    }),
}));

describe('App', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the App component', () => {
        const WrappedComponent = withFetchPeople(App);
        render(<WrappedComponent type="people" title="People" />);

        expect(screen.getByText('People')).toBeDefined();
        expect(screen.getByText('Person 1')).toBeDefined();
        expect(screen.getByText('Person 2')).toBeDefined();
        expect(screen.getByText('Person 3')).toBeDefined();
    });
});
