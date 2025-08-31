import React from 'react';
import successDoctor from '../assets/success-doctor.png';
import successReview from '../assets/success-review.png';
import successPatients from '../assets/success-patients.png';
import successStaffs from '../assets/success-staffs.png';
import CountUp from 'react-countup';

const MedicalServices = () => {
    return (
        <div className='bg-[#EFEFEF]'>
            <section className='pb-14 sm:pb-20 md:px-10 lg:px-40'>
                <h1 className='pjseb text-2xl sm:text-5xl/snug text-center mb-4 text-[#1d5364]'>We Provide Best Rental and Booking Services</h1>
                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-8'>Our platform connects you with trusted individuals offering used items for rent and skilled professionals across various services.</p>
                <div className='grid grid-cols-4 gap-2 sm:gap-6 mx-5'>
                    <div className='flex flex-col justify-center items-center text-center p-10 sm:p-12 bg-white rounded-2xl'>
                        <img src={successStaffs} alt="" />
                        <p className='pjseb text-2xl sm:text-[50px] lg:text-[64px]'>
                            <CountUp start={0} end={300} duration={3} />+
                        </p>
                        <p className='pjssb text-[12px] sm:text-2xl'>Total Stuffs</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-10 sm:p-12 bg-white rounded-2xl'>
                        <img src={successReview} alt="" />
                        <p className='pjseb text-2xl sm:text-[50px] lg:text-[64px]'>
                            <CountUp start={0} end={1400} duration={3} />+
                        </p>
                        <p className='pjssb text-[12px] sm:text-2xl'>Total Reviews</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-10 sm:p-12 bg-white rounded-2xl'>
                        <img src={successPatients} alt="" />
                        <p className='pjseb text-2xl sm:text-[50px] lg:text-[64px]'>
                            <CountUp start={0} end={700} duration={3} />+
                        </p>
                        <p className='pjssb text-[12px] sm:text-2xl'>Professionals</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center p-10 sm:p-12 bg-white rounded-2xl'>
                        <img src={successDoctor} alt="" />
                        <p className='pjseb text-2xl sm:text-[50px] lg:text-[64px]'>
                            <CountUp start={0} end={2500} duration={3} />+
                        </p>
                        <p className='pjssb text-[12px] sm:text-2xl'>Rent Items</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MedicalServices;