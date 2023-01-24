import React from 'react';
import { useForm } from 'react-hook-form';
import Home from '../../Home';
import UploadFile from './UploadFile';

const Injection = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        console.log(data);


    };

    return (
        <div>
            <Home></Home>
            <div className='flex justify-between'>
                <div className='pl-16 pt-10'>
                    <h1 className='text-3xl pl-16 text-start pt-6 text-blue-800'>Document</h1>

                    <div className='pt-16'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='card w-80 h-48 bg-base-100 shadow-xl pl-6'>
                                <label className='text-sm flex justify-start items-start pt-8 pb-2' htmlFor="doc">Search types of doc*</label>
                                <div className='flex justify-start'>
                                    <select {...register("doc")} className='w-[200px] flex justify-start text-sm border border-slate-500 rounded-sm bg-white' name="doc" >
                                        <option value="Technology expert">Technology expert</option>
                                        <option value="HR Manager">HR Manager</option>
                                        <option value="Product Manager">Product Manager</option>
                                        <option value="Product Analist">Product Analist</option>
                                    </select>
                                    <input type="submit" value='Submit' className='text-[10px] text-black px-3 py-1 ml-2 border border-black rounded-sm cursor-pointer' />
                                </div>
                            </div>
                            <div className='pl-[270px] pt-10'>
                                <input type="submit" value='Start' className='text-md text-black px-20 py-2 border border-black rounded-md cursor-pointer' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='pt-10'>
                    <h1 className='text-3xl pr-2 pt-6 text-blue-800'>File Upload</h1>
                    <div className='flex gap-6 pr-56'>
                        <div className='pt-10'>
                            <UploadFile></UploadFile>
                        </div>
                        <div className='pt-10'>Uploading...</div>
                    </div>
                    <div className='pt-12 pr-[340px]'>
                        <input type="submit" value='Create Now' className='text-md text-black px-10 py-2 border border-black rounded-md cursor-pointer' />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Injection;