import React from 'react';
import { Link } from 'react-router-dom';


const Extraction = () => {
    return (
        <div>

            <ul class="menu menu-horizontal bg-gray-100 w-screen px-10 my-4 py-4 rounded-box">
                <li><Link to="/search">Search Options</Link></li>
                <li><Link to="/exclude">Exclude</Link></li>
            </ul>
        </div>
    );
};

export default Extraction;