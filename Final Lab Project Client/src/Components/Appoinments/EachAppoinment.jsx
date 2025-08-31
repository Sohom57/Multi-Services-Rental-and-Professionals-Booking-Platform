import { Link } from 'react-router';
import { getData } from '../../Utilities/LocalStorage';
import { toast } from 'react-toastify';

const RemoveElement = (id) => {
    const GetItems = getData();
    const NewAppoinments = GetItems.filter((SingleAppoinment) => SingleAppoinment.id != id);
    localStorage.setItem('Appoinments', JSON.stringify(NewAppoinments));
}

const EachAppoinment = ({TotalAppoinments, setTotalAppoinments, SingleAppoinment }) => {
    return (
        <div className='bg-[#EFEFEF] mx-10 my-5 sm:py-8 sm:px-40'>
            <section className='bg-white p-8 rounded-2xl'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='pjseb text-sm sm:text-xl/relaxed'>{SingleAppoinment.name}</h1>
                        <p className=' flex flex-col pjsm text-[10px] sm:text-lg my-3 text-[#0f0f0f9c]'>
                            {SingleAppoinment.skill}
                        </p>
                    </div>
                    <p className=' flex flex-col pjsm text-[10px] sm:text-lg mt-3 text-[#0f0f0f9c]'>
                        Booking Fee : {SingleAppoinment.fee} Taka + Vat
                    </p>
                </div>
                <hr className='border-1 border-dashed border-[#0f0f0f1a] my-3 sm:my-4' />
                <div className='flex justify-center items-center'>
                    <Link onClick={ () => {
                        const restData = TotalAppoinments.filter((element) => element._id!=SingleAppoinment._id);
                        setTotalAppoinments(restData);
                        RemoveElement(SingleAppoinment.id);
                        toast.error('Appointment canceled');
                    }} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#ff0000e5] transition duration-300 ease-out border-2 border-[#ff0000e5] rounded-full w-full group">
                        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#ff0000e5] group-hover:translate-x-0 ease">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute flex items-center justify-center w-full h-full text-[#ff0000e5] transition-all duration-300 transform group-hover:translate-x-full ease pjsb text-sm sm:text-xl">Cancel Booking</span>
                        <span class="relative invisible pjsb text-[8px] sm:text-xl">Cancel Booking</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EachAppoinment;

