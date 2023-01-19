import React from 'react';
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex'>
            <div className='login-img w-1/2 h-[650px] text-white'>
                <h2 className='text-4xl pt-48'>Welcome To Txdap</h2>
                <h4 className='pl-[60px] pt-6'>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem Ipsum has been.</h4>
            </div>
            <div>
                <div className='flex h-screen justify-center pt-32 pl-48'>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='pb-16'>
                            <h1 className='text-3xl font-bold pb-2'>Txdap</h1>
                            <h1 className='text-2xl'>Sign Into Your Account</h1>
                        </div>
                        <input type="email" className='form-control border border-slate-400 h-[50px] w-[400px]' {...register("example")} /> <br />
                        <input className='form-control border border-slate-400 h-[50px] w-[400px]' {...register("exampleRequired", { required: true })} /> <br />
                        <input className='form-control border border-slate-400 h-[50px] w-[400px] btn bg-orange-400 text-white' type="submit" value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;