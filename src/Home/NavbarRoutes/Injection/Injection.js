import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home';
import './Injection.css'

const Injection = () => {

    return (
        <div>
            <Home></Home>

            <div className='flex justify-start gap-10 pl-20 pt-10'>
                <Link className='linkItem' to='/document'>Document</Link>

                <Link className='linkItem' to='/upload'>File Upload</Link>
            </div>
        </div>
    );
};

export default Injection;