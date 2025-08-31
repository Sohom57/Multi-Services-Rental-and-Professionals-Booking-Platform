import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import DoctorsProfileDetails from './DoctorsProfileDetails/DoctorsProfileDetails'
import Swal from 'sweetalert2';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { AuthContext } from '../Provider/AuthProvider';

const DoctorsCard = ({ professionalData }) => {
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
                fetch(`http://localhost:3000/professionalsData/${professionalData._id}`, {
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
        <div className='p-8 bg-white rounded-2xl'>
            <img className='mb-4 rounded-2xl' src={professionalData.photoURL} alt="" />
            <div className='flex gap-2 mb-4'>
                {
                    professionalData.availability == "yes" ?
                        (<div className='px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#09982f16] text-[#09982fcb] pjsm text-[12px] sm:text-sm text-center border-1 border-[#09982f2b]'>
                            <p>Available</p>
                        </div>) : (<div className='px-3.5 py-1.5 rounded-full bg-[#ff000016] text-[#ff0000cb] pjsm text-sm text-center border-1 border-[#ff00002b]'>
                            <p>Unavailable</p>
                        </div>)
                }
                <div className='px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#1769e523] text-[#1769e5dc] pjsm text-[12px] sm:text-sm text-center border-1 border-[#1769e539]'>
                    <p>{professionalData.experience}</p>
                </div>
            </div>
            <h2 className='pjseb text-xl sm:text-2xl mb-3'>{professionalData.name}</h2>
            <span className='flex w-full justify-between items-center'>
                <p className='pjsm text-[12px] sm:text-lg text-[#0f0f0f8c]'>{professionalData.skill}</p>
                {
                    User?.email == professionalData?.email && <MdOutlineDeleteForever className='cursor-pointer' onClick={handleDelete} size={45} />
                }
            </span>
            <hr className='border-1 border-dashed border-[#0f0f0f1a] my-2' />
            <p className='flex items-center mb-4'>
                <span className='text-2xl sm:text-3xl text-[#0f0f0f90] mr-3'>Ⓡ</span>
                <span className='pjsm text-[12px] sm:text-lg text-[#0f0f0fa3]'>Reg No: {professionalData._id}</span>
            </p>
            <div className='flex justify-center items-center'>
                <Link to={`/professionalsData/${professionalData._id}`} onClick={<DoctorsProfileDetails professionalData={professionalData}></DoctorsProfileDetails>} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#1d5364] transition duration-300 ease-out border-2 border-[#1d5364] rounded-full w-full group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1d5364] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#1d5364] transition-all duration-300 transform group-hover:translate-x-full ease pjsb text-md sm:text-xl">View Details</span>
                    <span className="relative invisible pjsb text-sm sm:text-xl">View Details</span>
                </Link>
            </div>
        </div>
    );
};

export default DoctorsCard;