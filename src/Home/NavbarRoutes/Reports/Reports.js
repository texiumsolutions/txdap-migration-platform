import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useInformation from '../../../hooks/useInformation';
import Home from '../../Home';


const Reports = () => {
    const [information] = useInformation();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/reports');
    };
    return (
        <div>
            <Home></Home>
            <div>
                <div className='ml-6'>
                    <div className='flex justify-between'>
                        <div className='pt-16'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='pl-6'>
                                    <label className='text-md flex justify-start items-start pt-8 pb-2' htmlFor="doc">Search types of doc*</label>
                                    <div className='flex justify-start'>
                                        <select {...register("doc")} className='w-[600px] flex justify-start text-md border border-slate-500 rounded-sm bg-white' name="doc" >
                                            {
                                                information.map(info => <option
                                                    key={info._id}
                                                    info={info}
                                                >{info.name}</option>)
                                            }
                                        </select>
                                        <input type="submit" value='Submit' className='text-[16px] bg-blue-700 sbtn text-black px-3 py-1 ml-2 border rounded-sm cursor-pointer' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-32 pl-16'>

            </div>
            {/* {
                handleSubmit(onSubmit) ? (
                    <ShowProfileInformation></ShowProfileInformation>
                ) :
                    (
                        <div>
                            <h1>Please Submit a information</h1>
                        </div>
                    )
            } */}
        </div>
    );
};

export default Reports;