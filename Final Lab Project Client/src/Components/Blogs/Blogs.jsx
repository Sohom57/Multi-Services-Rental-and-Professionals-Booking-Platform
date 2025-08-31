import React from 'react';
import EachBlog from './EachBlog';
import { useLoaderData } from 'react-router';

const Blogs = () => {

    const BlogsData = useLoaderData();
    return (
        <div className='bg-[#EFEFEF] py-8'>
            <h1 className='pjseb text-2xl sm:text-5xl/snug text-center mb-4'>FAQ</h1>
            <p className='pjsm text-[12px] sm:text-xl text-center text-[#0f0f0f9c] pb-4 sm:mb-8'>To help you better understand how our booking and rental platform works</p>
            {
                BlogsData.questionsAndAnswers.map((BlogData, index) => <EachBlog key={index} BlogData={BlogData}></EachBlog>)
            }
        </div>
    );
};

export default Blogs;