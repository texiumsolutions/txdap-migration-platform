import React from 'react';
import { useForm } from 'react-hook-form';
import './TransformationInfo.css';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import useTargetKey from '../../../hooks/useTargetKey';
import { useState } from 'react';

const TransformationInfo = ({ info }) => {
    const { _id, employee_id,
        first_name,
        last_name,
        email,
        phone_number,
        hire_date,
        job_id,
        salary,
        commission_pct,
        manager_id,
        department_id } = info;
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const url = `http://localhost:5000/target-key`;
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
                toast('Successfully Store Data On Your Database');
            })
    };
    const [showData, setShowData] = useState(true);
    const handleDelete = () => {
        setShowData(false);
    }
    const [showData2, setShowData2] = useState(true);
    const handleDelete2 = () => {
        setShowData2(false);
    }
    const [showData3, setShowData3] = useState(true);
    const handleDelete3 = () => {
        setShowData3(false);
    }
    const [showData4, setShowData4] = useState(true);
    const handleDelete4 = () => {
        setShowData4(false);
    }
    const [showData5, setShowData5] = useState(true);
    const handleDelete5 = () => {
        setShowData5(false);
    }


    return (
        <div className='pt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th className='pl-10'>Source Key</th>
                                <th className='pl-80'>Target Key</th>
                                <th className='pl-16'>Data type</th>
                                <th className=''>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showData && <tr>
                                    <td className='pl-10'>{employee_id}</td>
                                    <td className='pl-64'><input
                                        {...register("employee_id")}
                                        defaultValue={employee_id}
                                        className='transformation-info-input pl-4' type="text" /></td>
                                    <td className='w-[450px] pr-64'>
                                        <label>
                                            <select
                                                className="ep-input p-1 transformation-info-input"
                                                {...register("dataTypeName")}

                                            >
                                                <option selected="selected" value='date'>date</option>
                                                <option value='int'>int</option>
                                                <option value='string'>string</option>

                                            </select>
                                        </label>
                                    </td>
                                    <td onClick={handleDelete} className='text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                                </tr>
                            }
                            {
                                showData2 && <tr>
                                    <td className='pl-10'>{first_name}</td>
                                    <td className='pl-64'><input
                                        {...register("first_name")}
                                        defaultValue={first_name}
                                        className='transformation-info-input pl-4' type="text" /></td>
                                    <td className='w-[450px] pr-64'>
                                        <label>
                                            <select
                                                className="ep-input p-1 transformation-info-input"
                                                {...register("dataTypeName")}

                                            >
                                                <option selected="selected" value='date'>date</option>
                                                <option value='int'>int</option>
                                                <option value='string'>string</option>

                                            </select>
                                        </label>
                                    </td>
                                    <td onClick={handleDelete2} className='text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                                </tr>
                            }
                            {
                                showData3 && <tr>
                                    <td className='pl-10'>{last_name}</td>
                                    <td className='pl-64'><input
                                        {...register("last_name")}
                                        defaultValue={last_name}
                                        className='transformation-info-input pl-4' type="text" /></td>
                                    <td className='w-[450px] pr-64'>
                                        <label>
                                            <select
                                                className="ep-input p-1 transformation-info-input"
                                                {...register("dataType1")}

                                            >
                                                <option selected="selected" value='date'>date</option>
                                                <option value='int'>int</option>
                                                <option value='string'>string</option>

                                            </select>
                                        </label>
                                    </td>
                                    <td onClick={handleDelete3} className='text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                                </tr>
                            }
                            {
                                showData4 && <tr>
                                    <td className='pl-10'>{email}</td>
                                    <td className='pl-64'><input
                                        {...register("email")}
                                        defaultValue={email}
                                        className='transformation-info-input pl-4' type="text" /></td>
                                    <td className='w-[450px] pr-64'>
                                        <select
                                            {...register("dataType2")}
                                            className=" ep-input p-1 transformation-info-input"

                                        >
                                            <option value='date'>date</option>
                                            <option value='int'>int</option>
                                            <option value='string'>string</option>
                                        </select>
                                    </td>
                                    <td onClick={handleDelete4} className='text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                                </tr>
                            }
                            {
                                showData5 && <tr>
                                    <td className='pl-10'>{phone_number}</td>
                                    <td className='pl-64'><input
                                        {...register("phone_number")}
                                        defaultValue={phone_number}
                                        className='transformation-info-input pl-4' type="text" /></td>
                                    <td className='w-[450px] pr-64'>
                                        <select
                                            {...register("dataType3")}
                                            className=" ep-input p-1 transformation-info-input"

                                        >
                                            <option value='date'>date</option>
                                            <option value='int'>int</option>
                                            <option value='string'>string</option>
                                        </select>
                                    </td>
                                    <td onClick={handleDelete5} className='text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                                </tr>
                            }
                            <tr>
                                <td className='pl-10'>{hire_date}</td>
                                <td className='pl-64'><input
                                    {...register("hire_date")}
                                    defaultValue={hire_date}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType4")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{job_id}</td>
                                <td className='pl-64'><input
                                    {...register("job_id")}
                                    defaultValue={job_id}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType5")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{salary}</td>
                                <td className='pl-64'><input
                                    {...register("salary")}
                                    defaultValue={salary}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType6")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{commission_pct}</td>
                                <td className='pl-64'><input
                                    {...register("commission_pct")}
                                    defaultValue={commission_pct}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType7")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{manager_id}</td>
                                <td className='pl-64'><input
                                    {...register("manager_id")}
                                    defaultValue={manager_id}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType8")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{department_id}</td>
                                <td className='pl-64'><input
                                    {...register("department_id")}
                                    defaultValue={department_id}
                                    className='transformation-info-input pl-4' type="text" /></td>
                                <td className='w-[450px] pr-64'>
                                    <select
                                        {...register("dataType9")}
                                        className=" ep-input p-1 transformation-info-input"

                                    >
                                        <option value='date'>date</option>
                                        <option value='int'>int</option>
                                        <option value='string'>string</option>
                                    </select>
                                </td>
                                <td className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <input className="btn transformation_button bg-blue-700 m-8"
                    type="submit"
                    value="Create Mapping" />
            </form>
            <Toaster />
        </div>
    );
};
export default TransformationInfo;