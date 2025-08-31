import { Link, NavLink } from 'react-router';
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#1d5364] text-white px-[80px] py-[100px] flex items-center justify-between'>
            <h3 className='text-5xl/tight pjssb'>Trusted Platform for Rental and Booking Services</h3>
            <div className="w-[80%] flex flex-col items-end gap-[26px]">
                <div className="flex gap-[30px]">
                    <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#fff]'} text-md sm:text-xl text-[#aeaeae] transition-colors duration-300 ease-in-out hover:text-[#fff]`} to={'/Privacy-Policy'}>Privacy Policy</NavLink>
                    <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#fff]'} text-md sm:text-xl text-[#aeaeae] hover:text-[#fff]`} to={'/Terms-of-Service'}>Terms of Service</NavLink>
                    <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#fff]'} text-md sm:text-xl text-[#aeaeae] hover:text-[#fff]`} to={'/Support'}>Support</NavLink>
                    <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#fff]'} text-md sm:text-xl text-[#aeaeae] hover:text-[#fff]`} to={'/Chat'}>Chat</NavLink>
                    <NavLink className={({ isActive }) => `${isActive && 'underline underline-offset-8 text-[#fff]'} text-md sm:text-xl text-[#aeaeae] hover:text-[#fff]`} to={'/Privacy-Policy'}>Help</NavLink>
                </div>
                <div className="flex items-center gap-[13px]">
                    <Link className='text-[#aeaeae] text-[30px] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#fff]' to={'https://www.facebook.com/mostakinabedinshovon/'} target='_blank'><FaFacebook size={30} /></Link>
                    <Link className='text-[#aeaeae] text-[30px] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#fff]'  to={'https://github.com/MostakinAbedinShovon'} target='_blank'><FaGithub size={30} /></Link>
                    <Link className='text-[#aeaeae] text-[30px] cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#fff]'  to={'https://www.youtube.com/@MostakinAbedinShovon'} target='_blank'><FaYoutube size={30} /></Link>
                </div>
                <p className='text-[13px] text-[#aeaeae]'>Copyright © 2025, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;