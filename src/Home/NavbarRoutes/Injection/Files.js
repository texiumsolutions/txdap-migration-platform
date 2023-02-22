import React from 'react';
import './Files.css';
import { AiFillFileExcel } from "react-icons/ai";
import { IoIosRemoveCircle } from "react-icons/io";
import useFile from '../../../hooks/useFile';

const Files = ({ file }) => {
    const { data, _id } = file;
    const [files, setFiles] = useFile();

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure delete this?');
        if (proceed) {
            const url = `https://txdap-migration-platform-server-production.up.railway.app/upload/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingFile = files.filter(review => review._id !== id);
                    setFiles(remainingFile);
                })

        }
    }

    return (
        <div className='file'>
            <p onClick={() => handleDelete(_id)} className='flex justify-end text-3xl text-red-600 font-bold cursor-pointer'><IoIosRemoveCircle></IoIosRemoveCircle></p>
            <p className='flex justify-center items-center gap-3'>
                <h2 className='text-3xl text-blue-700 font-semibold'><AiFillFileExcel></AiFillFileExcel></h2>
                <h1 className='text-center'>{data?.[1]?.[0]}.csv</h1>
            </p>
        </div>
    );
};

export default Files;