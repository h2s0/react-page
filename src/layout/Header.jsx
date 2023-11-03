import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    
    return(
        <Link to="/">
            <div className = "bg-slate-800 text-white text-center py-3 mb-7 rounded font-[700]">
                🛫 희새의 비행일지 🛬
            </div>
        </Link>
    )
}

export default Header