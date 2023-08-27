function Card({trip}) {

    return(
    <>
    <div className="w-52 h-auto bg-blue-50 rounded-xl m-3 p-2">
        <img src={trip.src} alt="여행사진" className="w-full h-auto" />
        <div className="flex items-center gap-1 mt-4 justify-between">
            <div className="text-sm">{trip.countryText}</div>
            <span className="text-sm font-[300]">{trip.date}</span>
        </div>
    </div>
    </>
    )
}

export default Card