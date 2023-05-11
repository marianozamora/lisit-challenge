import CardComponent from "./Card";
import { render, screen } from '@testing-library/react';

describe('Card', () => {

    test('renders card component', () => {
        const mockData = {
            name: "Luke Skywalker",
            created: "2021-05-11T11:31:42.278Z",
            birth_year: "19BBY",
            starships: ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
            films: ["https://swapi.dev/api/films/1/"],
            url: "https://swapi.dev/api/people/1/"
        };
        render(<CardComponent data={mockData} />);
        expect(screen.getByText(/Birth Year:/i)).toBeDefined();
        expect(screen.getByText(/19BBY/i)).toBeDefined();
    });

});