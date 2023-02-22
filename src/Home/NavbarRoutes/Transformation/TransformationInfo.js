import React from 'react';
import { useForm } from 'react-hook-form';
import './TransformationInfo.css';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import useTargetKey from '../../../hooks/useTargetKey';

const TransformationInfo = ({ info }) => {
    const { _id, name, input1, input2, input3, input4, input5, input6 } = info;
    const { register, handleSubmit, reset } = useForm();

    const [information, setInformation] = useTargetKey();




    const onSubmit = data => {
        const url = `https://txdap-migration-platform-server-production.up.railway.app/target-key`;
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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this?');

        if (proceed) {
            const url = `https://txdap-migration-platform-server-production.up.railway.app/target-key/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingTargetKey = information.filter(info => info._id !== id);
                    setInformation(remainingTargetKey);
                })

        }
    }
    return (
        <div className='pt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className='pl-10'>Source Key</th>
                                <th className='pl-80'>Target Key</th>
                                <th className='pl-16'>Data type</th>
                                <th className=''>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pl-10'>{name}</td>
                                <td className='pl-64'><input
                                    {...register("name")}
                                    defaultValue={name}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input1}</td>
                                <td className='pl-64'><input
                                    {...register("input1")}
                                    defaultValue={input1}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input2}</td>
                                <td className='pl-64'><input
                                    {...register("input2")}
                                    defaultValue={input2}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input3}</td>
                                <td className='pl-64'><input
                                    {...register("input3")}
                                    defaultValue={input3}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input4}</td>
                                <td className='pl-64'><input
                                    {...register("input4")}
                                    defaultValue={input4}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input5}</td>
                                <td className='pl-64'><input
                                    {...register("input5")}
                                    defaultValue={input5}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input6}</td>
                                <td className='pl-64'><input
                                    {...register("input6")}
                                    defaultValue={input6}
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
                                <td onClick={() => handleDelete(_id)} className=' text-4xl text-red-700 cursor-pointer'><AiFillDelete></AiFillDelete></td>
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