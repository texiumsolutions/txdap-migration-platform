import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
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
        <div className="flex bg-blue-800 justify-between h-[50px]">
            <div className="flex">
                <div className="dropdown">
                    <div className="pt-4 pl-2">
                        <NavLink to="/home" className=" text-white text-2xl ">
                            <AiOutlineMenu></AiOutlineMenu>
                        </NavLink>
                    </div>

                </div>
                <div className="flex justify-center items-center">

                    <div exact="true" activeclassname="active">
                        <NavLink to="/extraction" className="dash-nav text-white mx-4 text-1xl ml-6">
                            Extractions
                        </NavLink>
                    </div>
                    <div exact="true" activeclassname="active">
                        <NavLink to="/transformation" className="dash-nav text-white mx-4 text-1xl">
                            Transformation
                        </NavLink>
                    </div>
                    <div exact="true" activeclassname="active">
                        <NavLink to="/injection" className="dash-nav text-white mx-4 text-1xl">
                            Injection
                        </NavLink>
                    </div>
                    <div exact="true" activeclassname="active">
                        <NavLink to="/reports" className="dash-nav text-white mx-4 text-1xl">
                            Reports
                        </NavLink>
                    </div>
                    <div exact="true" activeclassname="active">
                        <NavLink to="/dashboard" className="dash-nav text-white mx-4 text-1xl">
                            Dashboard
                        </NavLink>
                    </div>
                </div>
            </div>
            {signInErrorMessage}
            <div className="flex justify-center items-center ">
                <div className="avatar mx-4">
                    <div className="w-6 h-6  rounded-full ">
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