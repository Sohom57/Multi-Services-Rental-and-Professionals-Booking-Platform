import { NavLink, Outlet } from 'react-router';

const Post = () => {

    return (
        <div className='py-12 px-72 flex flex-col items-center gap-10'>
            <Outlet></Outlet>
            <div className='flex items-center'>
                <NavLink to={'/Posts/Professional'} className={({ isActive }) =>
                    `inline-flex items-center justify-center py-[2px] md:px-3 md:py-3 font-bold leading-6 text-[#1d5364] border-1 border-[#1d5364] rounded-tl-xl rounded-bl-xl w-[70px] sm:w-[140px] md:w-auto cursor-pointer text-[9px] md:text-lg pjsb ${isActive ? 'text-white bg-[#1d5364]' : ''}`}>
                    Professional
                </NavLink>
                <NavLink to={'/Posts/Rental'} className={({ isActive }) =>
                    `inline-flex items-center justify-center py-[2px] md:px-8 md:py-3 font-bold leading-6 text-[#1d5364] border-1 border-[#1d5364] rounded-tr-xl rounded-br-xl w-[70px] sm:w-[140px] md:w-auto cursor-pointer text-[9px] md:text-lg pjsb ${isActive ? 'text-white bg-[#1d5364]' : ''}`}>
                    Rental
                </NavLink>
            </div>

        </div >
    );
};

export default Post;