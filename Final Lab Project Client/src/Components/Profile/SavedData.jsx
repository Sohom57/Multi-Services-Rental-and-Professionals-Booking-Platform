import React from 'react';

const SavedData = ({ logedinUser }) => {
    return (
        <div className='bg-[#1d536416] px-10 lg:px-8 py-8 flex justify-center items-center rounded-3xl'>
            <section className='p-8 flex flex-col sm:flex-row gap-6 bg-white rounded-3xl w-full'>
                <img className='rounded-2xl w-[400px]  h-auto' src={logedinUser?.photoURL} alt="img" />
                <div className='w-full'>
                    <h2 className="card-title pjsm mb-2.5">Name: <span className='text-[#1d5364] pjsb'>{logedinUser?.name}</span></h2>
                    <h2 className="card-title pjsm">Email: <span className='text-[#1d5364] pjsb'>{logedinUser?.email}</span></h2>
                    <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                    <h2 className="card-title mb-2.5">Phone Number: <span className='text-[#1d5364] pjsb'>{logedinUser?.phoneNumber}</span></h2>
                    <h2 className="card-title mb-2.5">Working: <span className='text-[#1d5364] pjsb'>{logedinUser?.currentlyWorking}</span></h2>
                    <h2 className="card-title mb-2.5">Address: <span className='text-[#1d5364] pjsb'>{logedinUser?.presentAdd}</span></h2>
                    <h2 className="card-title mb-2.5">Skill: <span className='text-[#1d5364] pjsb'>{logedinUser?.skill}</span></h2>
                    <h2 className="card-title mb-2.5">Gender: <span className='text-[#1d5364] pjsb'>{logedinUser?.gender}</span></h2>
                    <h2 className="card-title">Bio: <span className='text-[#1d5364] pjsb'>{logedinUser?.Bio}</span></h2>
                </div>
            </section>
        </div>
    );
};

export default SavedData;