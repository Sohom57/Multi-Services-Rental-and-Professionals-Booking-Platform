import BarCharts from './BarCharts';
import EachAppoinment from './EachAppoinment';
import { getData } from '../../Utilities/LocalStorage';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';


const Appoinments = () => {
    const [bookedItems, setBookedItems] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/bookedItems')
            .then(res => res.json())
            .then(data => {
                setBookedItems(data);
                console.log(data);
            })
    }, []);
    console.log(bookedItems)
    return (
        <div className='bg-[#EFEFEF] pb-20'>
            {
                bookedItems?.length < 1 ? (
                    <div>
                        <div className='bg-[#EFEFEF] sm:px-40 sm:py-8'>
                            <section className='flex flex-col justify-center items-center px-40 py-[72px] bg-white rounded-3xl'>
                                <h1 className='pjseb text-2xl/snug sm:text-5xl/snug text-center mb-4'>No Bookings Today</h1>
                                <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f9c] mb-8'>You currently have no active rentals or bookings, start exploring to make the most of your time</p>
                                <Link to={'/'} className="inline-flex items-center justify-center w-full px-4 py-3 sm:px-8 sm:py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-full md:w-auto hover:bg-[#1d5364d7] text-md sm:text-lg pjsb">
                                    Back to Home
                                </Link>
                            </section>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='hidden lg:flex lg:flex-col'>
                            <BarCharts bookedItems={bookedItems}></BarCharts>
                        </div>
                        <h1 className='pjseb text-2xl sm:text-[40px]/snug text-center text-[#1d5364]'>My Today Bookings</h1>
                        <p className='pjsr text-[12px] sm:text-base text-center text-[#0f0f0f9c] mt-4'>Our platform connects you with verified, experienced professionals across various specialties — all at your convenience.</p>
                        {bookedItems?.map((SingleAppoinment) => <EachAppoinment key={SingleAppoinment._id} TotalAppoinments={bookedItems} setTotalAppoinments={bookedItems} SingleAppoinment={SingleAppoinment}></EachAppoinment>)}
                    </div>
                )
            }

        </div>
    );
};

export default Appoinments;