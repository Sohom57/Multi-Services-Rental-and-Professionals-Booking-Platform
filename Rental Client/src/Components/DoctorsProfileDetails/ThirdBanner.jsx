import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { getData, setData } from '../../Utilities/LocalStorage';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import Appoinments from '../Appoinments/Appoinments';
import Swal from 'sweetalert2';

const ThirdBanner = ({ professionalData }) => {
    const { User } = useContext(AuthContext);
    const [bookedItems, setBookedItems] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:3000/bookedItems')
            .then(res => res.json())
            .then(data => {
                setBookedItems(data.find(single => single?.email == User.email));
            })
    }, [User.email]);
    console.log(bookedItems)
    // const GetItems = getData();
    // const flag = GetItems.find((singleElement) => singleElement.id == professionalData.id);
    const handleBooking = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) => {
            if (result.isConfirmed) {
                window.scrollTo(0, 0)
                toast.success(`Order Booked for ${professionalData.name} successfully`)
                fetch('http://localhost:3000/bookedItems', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(professionalData)
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Order placed!",
                            text: "Your order has been placed.",
                            icon: "success"
                        });
                    })
                navigate('/bookedItems');
            }
        });
    }
    return (
        <div className='bg-[#EFEFEF] px-10 lg:px-40 pb-20'>
            <section className='flex rounded-2xl flex-col p-8 bg-white'>
                <h1 className='pjseb text-2xl/snug text-center mb-4'>Our Best Professionals</h1>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                <div className='flex justify-between items-center'>
                    <p className='pjsb text-md sm:text-lg'>Availability</p>
                    {
                        professionalData.availability == "yes" ? (<div className='px-3.5 py-1.5 rounded-full bg-[#09982f16] text-[#09982fd9] pjsm text-[12px] sm:text-sm text-center border-1 border-[#09982f2b]'>
                            <p>"{professionalData.name}" is Available Today</p>
                        </div>) : (<div className='px-3.5 py-1.5 rounded-full bg-[#ff000016] text-[#ff0000d9] pjsm text-[12px] sm:text-sm text-center border-1 border-[#ff00002b]'>
                            <p>"{professionalData.name}" is Unavailable Today</p>
                        </div>)
                    }
                </div>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-4' />
                <div className='flex justify-center items-center p-6'>

                    {
                        professionalData.availability == "yes" && (
                            bookedItems ? (
                                User ? (
                                    <Link onClick={() => {
                                        toast.error('Order has already been placed!')
                                    }} className='inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-xl pjsb'>
                                        Book Now
                                    </Link>
                                ) : (
                                    <Link to={'/Signup-Login'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-xl pjsb">
                                        Book Now
                                    </Link>
                                )
                            ) : (
                                User ? (
                                    <Link onClick={handleBooking} to={'/bookedItems'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-md sm:text-xl pjsb">
                                        Book Now
                                    </Link>
                                ) : (
                                    <Link to={'/Signup-Login'} className="inline-flex items-center justify-center w-full px-8 py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full hover:bg-[#1d5364d7] text-md sm:text-xl pjsb">
                                        Book Now
                                    </Link>
                                )
                            )
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default ThirdBanner;