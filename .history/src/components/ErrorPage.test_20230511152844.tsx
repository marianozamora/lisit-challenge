
vi.mock('react-router-dom', () => ({
    useRouteError: vi.fn(),
}));

describe('ErrorPage', () => {
    test('renders error details', () => {
        const errorMock = {
        statusText: 'Error',
        message: 'An unexpected error occurred',
        };

    vi.fn().mockReturnValue(errorMock);
});

});
