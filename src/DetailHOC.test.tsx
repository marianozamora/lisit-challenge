import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useGenerateRequestById } from './hooks/useSwapi';
import { render } from '@testing-library/react';
import { withFetch, formatString } from './DetailHOC';

vi.mock('./hooks/useSwapi', () => ({
    useGenerateRequestById: vi.fn().mockReturnValue({
        data: {
            count: 3,
            next: null,
            previous: null,
            results: [
                {
                    name: 'Person 1',
                    height: '172',
                    mass: '77',
                }]
        },
        isLoading: false,
        isError: false,
    }),
}));


describe('withFetch', () => {
    beforeEach(() => {
        useGenerateRequestById({
            type: 'people',
            id: '1',
        })
    });
    it('should render the component with the correct props', () => {
        const Component = () => <div>Component</div>;
        const ComponentWithFetch = withFetch(Component);
        const props = { type: 'people', title: 'People' };
        const { getByText } = render(
            <MemoryRouter initialEntries={['/people/1']}>
                <Routes>
                    <Route path="/people/:peopleId" element={<ComponentWithFetch {...props} />} />
                </Routes>
            </MemoryRouter>);
        expect(getByText('Component')).toBeDefined();
    });


});

describe('formatString', () => {
    it('should format a string with underscores to capitalized words', () => {
        expect(formatString('hello_world')).toBe('Hello World');
        expect(formatString('this_is_a_test')).toBe('This Is A Test');
        expect(formatString('another_string_with_underscores')).toBe('Another String With Underscores');
    });
});
