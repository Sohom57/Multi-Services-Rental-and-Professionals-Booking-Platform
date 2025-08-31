import error from '../assets/error.jpg'
import { Link } from 'react-router';

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-10'>
            <img src={error} alt="" />
            <h1 className='pjseb text-3xl sm:text-5xl/snug text-[#ff0000c8]'>404 - Page Not Found</h1>
            <p className='text-md sm:text-2xl/loose  my-4 pjssb text-[#0f0f0fd2]'>
                Oops! The page you're looking for doesn't exists.
            </p>
            <Link to={'/'} className="inline-flex items-center justify-center w-auto px-4 py-3 sm:px-8 sm:py-4 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-lg pjsb">
                Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;