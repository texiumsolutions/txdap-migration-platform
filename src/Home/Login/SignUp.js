import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineTwitter, AiOutlineGoogle } from 'react-icons/ai';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    if (user) {
        console.log(user);
    }

    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex'>
            <div className='login-img w-1/2 h-[650px] text-white'>
                <h2 className='text-4xl pt-48'>Welcome To Txdap</h2>
                <h4 className='pl-[60px] pt-6'>Lorem Ipsum is simply dummy text of the printing <br />and typesetting industry. Lorem Ipsum has been .</h4>
                <div className='flex pl-[217px] pt-10'>
                    <a href='/' className='text-5xl bg-white border rounded text-blue-600 mr-4'><FaFacebookF></FaFacebookF></a>
                    <a href='/' className='text-5xl bg-white border rounded text-blue-600 mr-4'><AiOutlineTwitter></AiOutlineTwitter></a>
                    <a href='https://texiumsolutions.com' className='text-5xl bg-white border rounded text-blue-600 mr-4'><AiOutlineGoogle></AiOutlineGoogle></a>
                    <a href='https://www.linkedin.com/company/texium-solutions/mycompany/' className='text-5xl bg-white border rounded text-blue-600'><BsLinkedin></BsLinkedin></a>
                </div>
            </div>
            <div>
                <div className='pt-16 pl-48'>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className='pb-16'>
                            <h1 className='text-3xl font-bold pb-2'>Txdap</h1>
                            <h1 className='text-2xl'>SignUp Into Your Account</h1>
                        </div>

                        <input type="text"
                            placeholder='Your Name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                            className='form-control border pl-4 border-slate-400 h-[50px] w-[400px]' />
                        <label class="label">
                            {errors.name?.type === 'required' && <p className='text-red-500'>{errors.name.message}</p>}
                        </label>
                        <input type="email"
                            placeholder='Your Email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                            className='form-control border pl-4 border-slate-400 h-[50px] w-[400px]' />
                        <label class="label">
                            {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                            {errors.email?.type === 'pattern' && <p className='text-red-500'>{errors.email.message}</p>}
                        </label>
                        <br />

                        <input type="password"
                            placeholder='Password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                            className='form-control border pl-4 border-slate-400 h-[50px] w-[400px]' />
                        <label class="label">
                            {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{errors.password.message}</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500' role="alert">{errors.password.message}</p>}
                        </label>
                        <br />
                        {signInError}
                        <input className='form-control border border-slate-400 h-[50px] w-[400px] btn bg-orange-400 text-white' type="submit" value='SignUp' />
                    </form>
                    <p className='pt-4 pr-40'><small>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;