import React from 'react';
import { Link } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImageURL';

function Card({ src, countryImage, city, date }) {
    
    return(
    <>
    <div className="w-64 h-auto bg-slate-100 rounded-xl m-3 p-3 hover:bg-slate-300 duration-300">
        <img src={src} alt="여행사진" className="w-full h-auto" />
        <div className="flex items-center gap-1 mt-4 justify-between">
            <div className='flex gap-2'>
                <img src={countryImage} alt="" className='w-8 h-auto'/>
                <div className="text-sm">{city}</div>
            </div>
            <span className="text-sm font-[300]">{date}</span>
        </div>
    </div>
    </>
    )
}

export default Card