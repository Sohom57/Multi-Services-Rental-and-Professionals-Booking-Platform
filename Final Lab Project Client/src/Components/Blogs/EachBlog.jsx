import React from 'react';
import { MdOutlineAddBusiness } from "react-icons/md";

const EachBlog = ({BlogData}) => {
    
    return (
        <div className='bg-[#EFEFEF] pt-3 sm:pt-8 mx-5 sm:px-40'>
            <section className='bg-white rounded-2xl p-8'>
                <h1 className='pjseb text-md sm:text-2xl/snug mb-4'>{BlogData.question}</h1>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-3 sm:my-4' />
                <p className='text-[12px] sm:text-xl/loose flex gap-3'>
                    <span className='pjsb text-[#1d5364]'>Answer: </span>
                    <span className='pjsm text-[#0f0f0fa8]'>{BlogData.answer}</span>
                </p>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                <div className='flex items-center gap-1 sm:gap-3 pjsr text-[#0f0f0f8b]'>
                    <MdOutlineAddBusiness size={30} />
                    <p className='text-[12px] sm:text-[16px]'>{BlogData.note}</p>
                </div>
            </section>
        </div>
    );
};

export default EachBlog;