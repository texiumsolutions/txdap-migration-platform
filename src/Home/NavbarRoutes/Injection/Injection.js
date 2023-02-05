import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Home from '../../Home';
import './Injection.css'


const Injection = () => {


    return (
        <div>
            <Home></Home>
            <div class=" flex gap-5 bg-gray-100 w-full px-5 my-4 py-4 rounded-box">

                <div exact activeClassName="active">
                    <NavLink className="extraction-navbar" to="/injection/information">
                        Document
                    </NavLink>
                </div>

                <div exact activeClassName="active">
                    <NavLink className="extraction-navbar" to="/injection/upload">
                        File Upload
                    </NavLink>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Injection;