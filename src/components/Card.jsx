import React from 'react';
import { Link } from 'react-router-dom';

function Card({trip}) {

    return(
    <>
    <Link to={`/detail${trip.id}`}>
        <div className="w-60 h-auto bg-slate-100 rounded-xl m-3 p-2">
            <img src={trip.src} alt="여행사진" className="w-full h-auto" />
            <div className="flex items-center gap-1 mt-4 justify-between">
                <div className="text-sm">{trip.countryText}</div>
                <span className="text-sm font-[300]">{trip.date}</span>
            </div>
        </div>
    </Link>
    </>
    )
}

export default Card