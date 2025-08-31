import React, { useEffect, useState } from 'react';
import DoctorsCard from './DoctorsCard';

const BestDoctors = ({ professionalsData }) => {
    const [displayData, setDisplayData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {
        if(showAll) setDisplayData(professionalsData);
        else setDisplayData(professionalsData.slice(0, 6));
    }, [professionalsData, showAll])
    return (
        <div className='bg-[#EFEFEF]'>
            <section className='flex flex-col items-center sm:py-20 px-6 md:px-[40px] py-6 lg:px-[110px]'>
                <h1 className='pjseb text-2xl sm:text-5xl/snug text-center mb-4 text-[#1d5364]'>Our Best Professionals</h1>
                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f9c] mb-8'>From professionals across every occupation to tools, vehicles, and more—our platform lets you book people or rent items with just a few clicks <br /> Trusted providers, Transparent pricing, Total convenience</p>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                    {
                        displayData.map((professionalData) => <DoctorsCard key={professionalData._id} professionalData={professionalData}></DoctorsCard>)
                    }
                </div>
                <button onClick={
                    () => {
                        setShowAll(!showAll)
                        if(showAll) window.scrollTo(0, 940)
                    }
                } className='inline-flex items-center justify-center px-[30px] py-4 font-bold leading-6 text-white bg-[#1d5364] rounded-full hover:bg-[#1d5364d7] w-[220px] cursor-pointer text-lg pjsb'>
                    {
                        showAll ? 'Show Less' : 'Show All'
                    }
                </button>
            </section>
        </div>
    );
};

export default BestDoctors;