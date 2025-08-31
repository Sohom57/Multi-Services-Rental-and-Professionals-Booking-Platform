import React from 'react';
import './GoogleFonts.css';
import banner1 from '../assets/banner-img-1.png';
import banner2 from '../assets/banner-img-2.png';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='bg-[#EFEFEF]'>
            <section className='flex flex-col items-center mx-[30px] sm:mx-[50px] border-[2px] sm:border-[3px] border-white bg-linear-to-b from-[#ffffff19] to-[#ffffffe2] rounded-4xl px-6 md:px-10 lg:px-40 py-6 sm:py-12 lg:py-16'>
                <h1 className='pjseb text-2xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Trusted Rentals and Reliable Bookings</h1>
                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-4 md:mb-6'>Our platform connects you with verified professionals and trusted item owners—anytime you need them. From skilled services to essential rentals, book in minutes and manage everything with ease and confidence</p>
                <form className='flex gap-2 md:gap-4 mb-4 md:mb-6'>
                    <input className='w-[150px] md:w-[420px] lg:w-[600px] bg-white rounded-full pjsr text-[8px] md:text-base pl-[18px] border-1 border-[#0f0f0f20] focus:outline-0' placeholder='Search for booking...' type="text" />
                    <Link className="inline-flex items-center justify-center md:px-8 md:py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full w-[70px] sm:w-[140px] md:w-auto hover:bg-[#1d5364d7] cursor-pointer text-[9px] md:text-lg pjsb">
                        Search Now
                    </Link>
                </form>
                <div className='flex gap-1 sm:gap-6'>
                    <img className='w-[200px] h-[115px] sm:w-[380px] sm:h-[260px] lg:w-[578px] lg:h-[350px] rounded-xl sm:rounded-2xl' src={banner1} alt="" />
                    <img className='w-[200px] h-[115px] sm:w-[380px] sm:h-[260px] lg:w-[578px] lg:h-[350px] rounded-xl sm:rounded-2xl' src={banner2} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Hero;