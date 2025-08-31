import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import './GoogleFonts.css';
import logo from '../assets/logo.png';
import { RiMenu3Line } from "react-icons/ri";
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Profile from './Profile/Profile';

const NavBar = () => {
    const { User, LogOut } = use(AuthContext);
    const [logedinUser, setLogedinUser] = useState(null);
    useEffect(() => {
        if (User?.email) {
            fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(data => {
                    const foundUser = data.find(singleUser => singleUser.email === User.email);
                    setLogedinUser(foundUser);
                });
        }
    }, [User]);
    const navigate = useNavigate();
    const handleLogOut = () => {
        LogOut()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logout!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }).catch((error) => {
                console.log(error);
            });
    }

    const location = useLocation();
    const isActive = location.pathname === '/Posts/Professional' || location.pathname === '/Posts/Rental';
    return (
        <nav className='bg-[#EFEFEF] flex items-center px-10 md:px-14 xl:px-40 py-2 sm:py-5 justify-between'>
            <details className="dropdown xl:hidden">
                <summary className="btn m-1">
                    <RiMenu3Line className='size-4 md:size-9 md:py-1' />
                </summary>
                <ul className="gap-y-1 sm:gap-y-2 menu dropdown-content bg-base-100 rounded-box z-1 sm:h-auto w-52 p-2 shadow-sm">
                    <NavLink className={`text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/'}>Home</NavLink>
                    <NavLink className={`text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/bookedItems'}>My-Bookings</NavLink>
                    <NavLink className={`text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/Blogs'}>Blogs</NavLink>
                    <NavLink className={`text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/Contact-Us'}>Contact Us</NavLink>
                </ul>
            </details>
            <div className='hidden md:flex items-center gap-2'>
                <img height="85px" width="85px" src={logo} alt="" />
                <h1 className='text-[32px] pjseb text-[#1d5364]'>Lagbe?</h1>
            </div>
            <div className='hidden xl:flex gap-12'>
                <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#1d5364]'} text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#1d5364]'} ${logedinUser?.role=="Professional-rental" && 'hidden'} ${!User && 'hidden'} text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/bookedItems'}>My-Bookings</NavLink>
                <NavLink className={`${isActive && 'underline underline-offset-8 text-[#1d5364]'} ${logedinUser?.role=="Customer" && 'hidden'} ${!User && 'hidden'} text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/Posts/Professional'}>Posts</NavLink>
                <NavLink className={({ isActive }) => ` ${isActive && 'underline underline-offset-8 text-[#1d5364]'} text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/Blogs'}>FAQ</NavLink>
                <NavLink className={({ isActive }) => ` ${isActive && 'underline underline-offset-8 text-[#1d5364]'} text-[10px] sm:text-xl text-[#0f0f0fc0] pjsm`} to={'/Contact-Us'}>Contact Us</NavLink>
            </div>
            {
                User ? <div className='flex gap-3 items-center'>
                    <div onClick={() => navigate('/Profile')} className="avatar cursor-pointer">
                        <div className="ring-primary ring-offset-base-100 w-13 rounded-full ring-2 ring-offset-2">
                            <img src={User.photoURL} />
                        </div>
                    </div>
                    <Link onClick={handleLogOut} className="inline-flex items-center justify-center py-[2px] md:px-8 md:py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full w-[70px] sm:w-[140px] md:w-auto hover:bg-[#1d5364d7] cursor-pointer text-[9px] md:text-lg pjsb">
                        Logout
                    </Link>
                </div> : <div className='flex gap-3 items-center'>
                    <Link to={'/Signup-Login'} className="inline-flex items-center justify-center py-[2px] md:px-8 md:py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full w-[70px] sm:w-[140px] md:w-auto hover:bg-[#1d5364d7] cursor-pointer text-[9px] md:text-lg pjsb">
                        Login
                    </Link>
                </div>
            }
        </nav>
    );
};

export default NavBar;