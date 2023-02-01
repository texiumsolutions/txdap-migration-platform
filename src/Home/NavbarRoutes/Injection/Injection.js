import React from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Upload from '../../components/Upload.tsx';
import Home from '../../Home';
import DocumentInfo from './DocumentInfo';
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