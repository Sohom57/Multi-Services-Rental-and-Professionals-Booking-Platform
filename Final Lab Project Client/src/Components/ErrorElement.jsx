import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';

const ErrorElement = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='bg-[#EFEFEF] px-40 py-8'>
                <section className='flex flex-col justify-center items-center px-40 py-[72px] bg-white rounded-3xl'>
                    <h1 className='pjseb text-5xl/snug text-center mb-4'>Page Not Found</h1>
                    <p className='pjsm text-lg text-center text-[#0f0f0f9c] mb-8'>Oops! It seems like you've landed on a page that doesn't exist. Please check the link or return to the homepage for further assistance</p>
                    <Link href="#_" className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full md:w-auto hover:bg-[#1d5364d7] text-lg pjsb">
                        Homepage
                    </Link>
                </section>
            </div>
        </div>
    )
};

export default ErrorElement;