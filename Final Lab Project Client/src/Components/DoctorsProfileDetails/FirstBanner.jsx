import React from 'react';

const FirstBanner = ({professionalData}) => {
    return (
        <div className='bg-[#EFEFEF] lg:px-40 py-5 lg:py-8'>
            <section className='md:mx-10 mx-10 py-1 px-5 pt-8 sm:px-18 lg:mx-0 lg:px-40 lg:py-[72px] sm:py-12 bg-white rounded-3xl'>
                <h1 className='pjseb text-2xl md:text-3xl lg:text-5xl/snug text-center mb-4 text-[#1d5364]'>Our Best Professionals</h1>
                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f9c] mb-8'>{professionalData.Bio}</p>
            </section>
        </div>
    );
};

export default FirstBanner;