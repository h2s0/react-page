import React from 'react';
import { Link } from 'react-router-dom';

function Card({trip}) {

    return(
    <>
    <Link to={`/detail${trip.id}`}>
        <div className="w-64 h-auto bg-slate-100 rounded-xl m-3 p-3 hover:opacity-75">
            <img src={trip.src} alt="여행사진" className="w-full h-auto" />
            <div className="flex items-center gap-1 mt-4 justify-between">
                <div className='flex gap-2'>
                    <img src={trip.countryImage} alt="" className='w-8 h-auto'/>
                    <div className="text-sm">{trip.city}</div>
                </div>
                <span className="text-sm font-[300]">{trip.date}</span>
            </div>
        </div>
    </Link>
    </>
    )
}

export default Card