import Card from '@/components/Card'

const trips = [
    {
        id:1,
        src: '/imgs/Marseille.jpg',
        countryImage: '/flagImgs/flagFrance.png',
        city: 'Marseille',
        date: '2018.07'
    },
    {
        id:2,
        src: '/imgs/Cambridge.jpg',
        countryImage: '/flagImgs/FlagUk.png',
        city: 'Cambridge',
        date: '2020.10'
    },
    {
        id:3,
        src: '/imgs/Valencia.jpg',
        countryImage: '/flagImgs/FlagSpain.png',
        city: 'Valencia',
        date: '2018.07'
    },
    {
        id:4,
        src: '/imgs/Interlaken.jpg',
        countryImage: '/flagImgs/FlagSwitzerland.png',
        city: 'Interlaken',
        date: '2018.08'
    },
    {
        id:5,
        src: '/imgs/Budapest.jpg',
        countryImage: '/flagImgs/FlagHungary.png',
        city: 'Budapest',
        date: '2018.08'
    },
    {
        id:6,
        src: '/imgs/Florence.jpg',
        countryImage: '/flagImgs/FlagItaly.png',
        city: 'Florence',
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