import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../../Home';
import './Injection.css'


const Injection = () => {


    return (
        <div>
            <Home></Home>
            <div class=" flex bg-gray-100 w-full px-5 my-4 py-4 rounded-box">

                <div >
                    <Link className="extraction-navbar" to="/injection/information">
                        Document
                    </Link>
                </div>

                <div>
                    <Link className="extraction-navbar" to="/injection/upload">
                        File Upload
                    </Link>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Injection;