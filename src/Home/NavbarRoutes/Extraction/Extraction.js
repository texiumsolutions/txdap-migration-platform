import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home';

const Extraction = () => {
    return (
        <div>
            <Home></Home>
            <ul class="menu menu-horizontal bg-gray-100 w-screen px-10 my-4 py-4 rounded-box">
                <li><Link to="/eprofile">Extraction Profile</Link></li>
                <li><Link to="/run">Run Profile</Link></li>
            </ul>
        </div>
    );
};

export default Extraction;