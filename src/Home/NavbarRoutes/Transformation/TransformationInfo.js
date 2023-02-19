import React from 'react';
import { useForm } from 'react-hook-form';
import './TransformationInfo.css';
import toast, { Toaster } from 'react-hot-toast';

const TransformationInfo = ({ info }) => {
    const { input1, input2, input3, input4, input5, input6, input7, input8, input9, input10 } = info;
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
    return (
        <div className='pt-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th className='pl-10'>Source Key</th>
                                <th className='pl-80'>Target Key</th>
                                <th className='pl-10'>Source Key</th>
                                <th className='pl-80'>Target Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='pl-10'>{input1}</td>
                                <td className='pl-64'><input {...register("input1")} className='transformation-info-input' type="text" /></td>
                                <td className='pl-10'>{input2}</td>
                                <td className='pl-64'><input {...register("input2")} className='transformation-info-input' type="text" /></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input3}</td>
                                <td className='pl-64'><input {...register("input3")} className='transformation-info-input' type="text" /></td>
                                <td className='pl-10'>{input4}</td>
                                <td className='pl-64'><input {...register("input4")} className='transformation-info-input' type="text" /></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input5}</td>
                                <td className='pl-64'><input {...register("input5")} className='transformation-info-input' type="text" /></td>
                                <td className='pl-10'>{input6}</td>
                                <td className='pl-64'><input {...register("input6")} className='transformation-info-input' type="text" /></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input7}</td>
                                <td className='pl-64'><input {...register("input7")} className='transformation-info-input' type="text" /></td>
                                <td className='pl-10'>{input8}</td>
                                <td className='pl-64'><input {...register("input8")} className='transformation-info-input' type="text" /></td>
                            </tr>
                            <tr>
                                <td className='pl-10'>{input9}</td>
                                <td className='pl-64'><input {...register("input9")} className='transformation-info-input' type="text" /></td>
                                <td className='pl-10'>{input10}</td>
                                <td className='pl-64'><input {...register("input10")} className='transformation-info-input' type="text" /></td>
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