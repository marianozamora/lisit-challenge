import ListHOC from "../ListHOC"

export default function People() {
    return (
        <div>
            <ListHOC
                //url='https://swapi.dev/api/starships/'
                title='Planets Here!'
                type='planets'
            />
        </div>
    )
}