import React from 'react';
import { useForm } from 'react-hook-form';
import useInformation from '../../../hooks/useInformation';
import Home from '../../Home';

import Injection from './Injection';

const DocumentInfo = () => {
    const [information] = useInformation();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);


    };

    return (
        <div>
            <Home></Home>
            <div className='card w-[1400px] h-[600px] mt-12 ml-16 bg-base-100 shadow-xl drop-shadow-2xl'>
                <Injection></Injection>

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
                                <input type="submit" value='Submit' className='text-[16px] text-black px-3 py-1 ml-2 border border-black rounded-sm cursor-pointer' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DocumentInfo;