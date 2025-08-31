import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Appoinments from "../Components/Appoinments/Appoinments";
import Home from "../Components/Home";
import ErrorElement from "../Components/ErrorElement";
import Blogs from "../Components/Blogs/Blogs";
import PageNotFound from "../Components/PageNotFound";
import DoctorsProfileDetails from "../Components/DoctorsProfileDetails/DoctorsProfileDetails";
import Login from "../Components/LoginPage/Login";
import Profile from "../Components/Profile/Profile";
import Post from "../Components/Post/Post";
import Professional from "../Components/Post/Professional";
import Rental from "../Components/Post/Rental";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <div className="w-full h-[500px] flex justify-center items-center">
                    <span className="loading loading-bars loading-xl"></span>
                </div>,
                loader: () => fetch('http://localhost:3000/professionalsData')
            },
            {
                path: '/Profile',
                Component: Profile,
            },
            {
                path: '/bookedItems',
                Component: Appoinments
            },
            {
                path: '/Contact-Us',
                Component: PageNotFound
            },
            {
                path: '/Blogs',
                Component: Blogs,
                hydrateFallbackElement: <div className="w-full h-[500px] flex justify-center items-center">
                    <span className="loading loading-bars loading-xl"></span>
                </div>,
                loader: () => fetch('/QueAns.JSON')
            },
            {
                path: '/professionalsData/:id',
                Component: DoctorsProfileDetails,
                hydrateFallbackElement: <div className="w-full h-[500px] flex justify-center items-center">
                    <span className="loading loading-bars loading-xl"></span>
                </div>,
                loader: ({params}) => fetch(`http://localhost:3000/professionalsData/${params.id}`)
            },
            {
                path: '/Posts',
                Component: Post,
                children: [
                    {
                        path: '/Posts/Professional',
                        Component: Professional
                    },
                    {
                        path: '/Posts/Rental',
                        Component: Rental
                    }
                ]
            }
        ]
    },
    {
        path: '/Signup-Login',
        Component: Login
    }

])

export default router;
