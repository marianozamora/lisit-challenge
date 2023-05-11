import ListHOC from "../ListHOC"

export default function People() {
    return (
        <div>
            <h1>Star</h1>
            <ListHOC
                url='https://swapi.dev/api/starships/'
                title='Starships'
                type='starships'
            />
        </div>
    )
}