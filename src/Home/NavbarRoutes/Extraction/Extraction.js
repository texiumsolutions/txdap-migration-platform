import React from 'react';
import {NavLink } from 'react-router-dom';
import Home from '../../Home';
import './Extraction.css';

const Extraction = () => {
    return (
        <div>
            <Home></Home>
            <ul class=" flex bg-gray-100 w-screen px-10 my-4 py-4 rounded-box">
                <li><NavLink exact activeClassName="active" className='extraction-navbar' to="/eprofile">Extraction Profile</NavLink></li>
                <li><NavLink activeClassName="active" className='extraction-navbar' to="/informations">Run Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default Extraction;