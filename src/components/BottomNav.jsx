import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faUser, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regFaHeart, faUser as regFaUser } from '@fortawesome/free-regular-svg-icons';

function BottomNav () {

    return (
        <nav className="wrapper flex justify-around text-center">
            <div className="w-1/4 h-16 bg-pink-200 flex items-center justify-center flex-col">
                <FontAwesomeIcon icon={faHouse} className="w-6 h-6" />
                <span className="text-sm">홈</span>
            </div>
            <div className="w-1/4 h-16 bg-green-200 flex items-center justify-center flex-col">
                <FontAwesomeIcon icon={faPlus} className="w-6 h-6"/>
                <span className="text-sm">재료추가</span>
            </div>
            <div className="w-1/4 h-16 bg-blue-200 flex items-center justify-center flex-col">
                <FontAwesomeIcon icon={faHeart} className="w-6 h-6"/>
                <span className="text-sm">좋아요</span>
            </div>
            <div className="w-1/4 h-16 bg-yellow-200 flex items-center justify-center flex-col">
                <FontAwesomeIcon icon={regFaUser} className="w-6 h-6"/>
                <span className="text-sm">프로필</span>
            </div>
        </nav>
    )

}

export default BottomNav