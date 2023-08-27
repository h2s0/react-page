function Card({card}) {

    return(
    <>
    <div className="w-52 h-40 bg-blue-50 rounded-xl m-3 p-2">
        <img src="{card.src}" alt="" className="w-full h-auto" />
        <div className="">제목</div>
        <div className="flex items-center gap-1">
            <img src="{card.country}" alt="" />
            <div className="">나라</div>
            <div className="{card.date}">날짜</div>
        </div>
    </div>
    </>
    )

}

export default Card