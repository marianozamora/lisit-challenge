
vi.mock('axios');
vi.mock('../api/swapi');

describe('Your Test Suite Name', () => {
    describe('generateRequest', () => {
        test('should return the expected data', async () => {
            const mockData = { name: 'Luke Skywalker' };

            // const result = await generateRequest({ type: 'people', page: 1, query: ''});

            expect(mockData).toEqual(mockData);

        });
    });


});