import Card from '@/components/Card'

const trips = [
    {
        id:1,
        src: '/imgs/Marseille.jpg',
        countryText: 'France',
        date: '2018.07'
    },
    {
        id:2,
        src: '/imgs/Cambridge.jpg',
        countryText: 'United Kingdom',
        date: '2020.10'
    },
    {
        id:3,
        src: '/imgs/Valencia.jpg',
        countryText: 'Spain',
        date: '2018.07'
    },
    {
        id:4,
        src: '/imgs/Interlaken.jpg',
        countryText: 'Switzerland',
        date: '2018.08'
    },
    {
        id:5,
        src: '/imgs/Budapest.jpg',
        countryText: 'Hungary',
        date: '2018.08'
    },
    {
        id:6,
        src: '/imgs/Florence.jpg',
        countryText: 'Italy',
        date: '2018.08'
    }
]



function CardList() {
    return(
        <div className='flex flex-wrap justify-around'>
            {trips.map(trip => (
                <>
                    <Card trip={trip} key={trips.id} />
                </>
            ))}
        </div>
    )
}

export default CardList