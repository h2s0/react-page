import Card from '@/components/Card'
import { getPbImageURL } from '@/utils/getPbImageURL';
import { useEffect, useState } from 'react';

function CardList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        async function fetchlists() {
            const response = await fetch("http://127.0.0.1:8090/api/collections/trips/records")
            const data = await response.json();
            setList(data.items)
            console.log(data.items)
            console.log(getPbImageURL())
        }
        fetchlists();
    }, [])

    return(
        
        <div className='flex flex-wrap justify-center gap-7'>
            {
                list.map(({ src, countryImage, city, date }) => {
                    return (
                        <Card
                            src={src}
                            countryImage={countryImage}
                            city={city}
                            date={date}
                        />
                    )
                })
            }
        </div>
    )


}

export default CardList