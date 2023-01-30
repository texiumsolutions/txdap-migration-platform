import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import useInformation from '../../../hooks/useInformation';
import Home from '../../Home';
import Circle from './Circle';

import Injection from './Injection';

import '././Progress.css'

const DocumentInfo = () => {


    const [pcircle] = useState(5);
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth((100 / (pcircle - 1)) * active);
    }, [pcircle, active]);

    const arr = [];
    for (let i = 0; i < pcircle; i++) {
        arr.push(
            <Circle className={i <= active ? "pcircle active" : "pcircle"} key={i}>
                {i}
            </Circle>
        );
    }

    const [circles, setCircles] = useState([]);

    useEffect(() => {
        fetch("circleData.json")
            .then((res) => res.json())
            .then((data) => setCircles(data));
    }, []);

    const [information] = useInformation();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/run`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
            })
    };

    return (
        <div>
            <Home></Home>
            <div className='card w-[1400px] h-[600px] mt-12 ml-16 bg-base-100 shadow-xl drop-shadow-2xl'>
                <Injection></Injection>

                <div className='flex justify-between'>
                    <div className='pt-16'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='pl-6'>
                                <label className='text-md flex justify-start items-start pt-8 pb-2' htmlFor="doc">Search types of doc*</label>
                                <div className='flex justify-start'>
                                    <select {...register("doc")} className='w-[200px] flex justify-start text-md border border-slate-500 rounded-sm bg-white' name="doc" >
                                        {
                                            information.map(info => <option
                                                key={info._id}
                                                info={info}
                                            >{info.name}</option>)
                                        }
                                    </select>
                                    <input onClick={() => {
                                        active >= pcircle ? setActive(pcircle) : setActive(active + 1);
                                    }} type="submit" value='Submit' className='text-[16px] text-black px-3 py-1 ml-2 border border-black rounded-sm cursor-pointer' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="pcontainer">
                        <div className="pcontent">
                            <div className="pprogressbar">
                                <div
                                    className="pprogress"
                                    style={{
                                        width: width + "%",
                                    }}
                                ></div>
                                {arr}
                            </div>
                            {circles.map((circle) => (
                                <Circle key={circle.id} circle={circle}></Circle>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocumentInfo;