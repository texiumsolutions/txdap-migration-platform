import React from 'react';
import { useForm } from 'react-hook-form';
import useInformation from '../../../Hooks/useInformation';

import Injection from './Injection';

const DocumentInfo = () => {
    const [information] = useInformation();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        console.log(data);

 
    };

    return (
        <div>
            <Injection></Injection>

            <div className='pt-16 pl-64'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='card w-96 h-64 bg-base-100 shadow-xl pl-6'>
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
                    <div className='pt-10 pr-80'>
                        <input type="submit" value='Start' className='text-[22px] text-black px-24 py-3 border border-black rounded-md cursor-pointer' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DocumentInfo;