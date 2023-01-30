import React from 'react';
import { Link } from 'react-router-dom';
import './Injection.css'


const Injection = () => {

    return (
        <div>
            <div className='flex justify-start gap-10 pl-8 pt-10'>
                <Link className='linkItem' to='/information'>Document</Link>
                <Link className='linkItem' to='/upload'>File Upload</Link>
            </div>
        </div>
    );
};

export default Injection;