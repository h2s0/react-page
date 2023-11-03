function Trip() {

    return(
    <>
    <div className="w-52 h-40 bg-blue-50 rounded-xl m-3 p-2">
        <img src="{trip.src}" alt="" className="w-full h-auto" />
        <div className=""></div>
        <div className="flex items-center gap-1">
            <img src="{trip.country}" alt="" />
            <div className=""></div>
            <div className=""></div>
        </div>
    </div>
    </>
    )

}

export default Trip