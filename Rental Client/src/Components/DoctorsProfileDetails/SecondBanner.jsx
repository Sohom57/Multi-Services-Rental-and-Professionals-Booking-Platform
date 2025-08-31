import React, { useContext } from 'react';
import AvailableDay from '../AvailableDay';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const SecondBanner = ({ professionalData }) => {
    const { User } = useContext(AuthContext);
    const nevigate = useNavigate();
    const handleDelete = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/professionalsData/${professionalData._id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        nevigate('/');
                    })
            }
        });
    }
    return (
        <div className='bg-[#EFEFEF] px-10 lg:px-40 pb-8'>
            <section className='p-14 flex flex-col sm:flex-row gap-6 bg-white rounded-3xl'>
                <img className='rounded-2xl w-[480px] h-auto' src={professionalData.photoURL} alt="" />
                <div className='w-full'>
                    <h1 className='pjseb text-2xl sm:text-[32px]'>{professionalData.name}</h1>
                    <p className=' flex flex-col pjsm text-sm my-2
                     sm:text-lg/relaxed text-[#0f0f0f9c]'>
                        Email: {professionalData.email}
                    </p>
                    <p className=' flex flex-col pjsm text-sm my-2
                     sm:text-lg/relaxed text-[#0f0f0f9c]'>
                        Number: {professionalData.phoneNumber}
                    </p>
                    <p className=' flex flex-col pjsm text-sm my-2
                     sm:text-lg/relaxed text-[#0f0f0f9c]'>
                        Gender: {professionalData.gender}
                    </p>
                    <p className='text-md sm:text-xl/loose flex flex-col text-[#0f0f0f96]'>
                        <span className='pjsb'>{professionalData.skill}</span>
                    </p>
                    <p className='text-md sm:text-xl/loose flex flex-col'>
                        <span className='pjsb'>{professionalData.currentlyWorking}</span>
                    </p>
                    <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                    <p className='flex items-center mb-4'>
                        <span className='text-2xl sm:text-3xl text-[#0f0f0f90] mr-2 sm:mr-3'>Ⓡ</span>
                        <span className='pjsm text-md sm:text-lg text-[#0f0f0fa3]'>Reg No: {professionalData._id}</span>
                    </p>
                    <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                    <div className='flex items-center gap-4 mb-4'>
                        <div className='flex items-center gap-2'>
                            {
                                professionalData.availability == "yes" ?
                                    (<div className='px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#09982f16] text-[#09982fcb] pjsm text-[12px] sm:text-sm text-center border-1 border-[#09982f2b]'>
                                        <p>Available</p>
                                    </div>) : (<div className='px-3.5 py-1.5 rounded-full bg-[#ff000016] text-[#ff0000cb] pjsm text-sm text-center border-1 border-[#ff00002b]'>
                                        <p>Unavailable</p>
                                    </div>)
                            }
                        </div>
                        <div className='px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#1769e523] text-[#1769e5dc] pjsm text-[12px] sm:text-sm text-center border-1 border-[#1769e539]'>
                            <p>{professionalData.experience}</p>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <p className='flex pjs text-sm sm:text-base gap-2'>
                            <span className='pjsb'>Consultation Fee:</span>
                            <span className='pjssb text-[#176AE5]'>Taka : {professionalData?.fee}</span>
                            <span className='pjsm text-[#14141486]'>(incl. Vat)</span>
                            <span className='pjssb text-[#176AE5]'>Per {professionalData.feeBasis}</span>
                        </p>
                        <MdOutlineDeleteForever onClick={handleDelete} className='cursor-pointer' size={45} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecondBanner;