import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiFillFileAdd, AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import './DashboardNavbar.css';
import Loading from "../Loading/Loading";

const DashboardNavbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    let signInErrorMessage;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        signInErrorMessage = <p className="text-red-500"><small>{error?.message}</small></p>
    }
    return (
        <div className="flex bg-blue-800 justify-between h-[42px]">
            <div className="flex">
                <div class="dropdown">
                    <label tabindex="0">
                        <div className="pl-3 pt-3">
                            <Link to="/home" className="text-white text-xl">
                                <AiOutlineMenu></AiOutlineMenu>
                            </Link>
                        </div>
                    </label>
                    <div className="flex justify-start items-start">
                        <ul tabindex="0" className="menu menu-compact dropdown-content shadow bg-blue-800 h-[681px] w-12">
                            <Link to="/home" className=" text-white mx-2 pt-12 pb-4 text-2xl">
                                <FaHome></FaHome>
                            </Link>
                            <Link to="/home" className=" text-white mx-2 pt-4 pb-4 text-2xl">
                                <AiFillFileAdd></AiFillFileAdd>
                            </Link>
                            <Link to="/home" className=" text-white mx-2 pt-4 text-2xl">
                                <AiFillSetting></AiFillSetting>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div exact activeClassName="active">
                        <NavLink to="/extraction" className="text-white mx-4 text-1xl ml-10">
                            Extraction
                        </NavLink>
                    </div>
                    <div exact activeClassName="active">
                        <NavLink to="/transformation" className="text-white mx-4 text-1xl">
                            Transformation
                        </NavLink>
                    </div>
                    <div exact activeClassName="active">
                        <NavLink to="/injection" className="text-white mx-4 text-1xl">
                            Injection
                        </NavLink>
                    </div>
                    <div exact activeClassName="active">
                        <NavLink to="/reports" className=" text-white mx-4 text-1xl">
                            Reports
                        </NavLink>
                    </div>
                    <div exact activeClassName="active">
                        <NavLink to="/dashboard" className=" text-white mx-4 text-1xl">
                            Dashboard
                        </NavLink>
                    </div>
                </div>
            </div>
            {signInErrorMessage}
            <div className="flex justify-center items-center ">
                <div class="avatar mx-4">
                    <div class="w-6 h-6  rounded-full ">
                        <img alt=" " src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div className='mx-4'>
                    {user ? <Link className='text-white text-1xl' to="/" onClick={logout}>SignOut</Link> : <Link className='text-white text-1xl font-semibold' to="/">Login</Link>}
                </div>

            </div>
        </div>
    );
};

export default DashboardNavbar;