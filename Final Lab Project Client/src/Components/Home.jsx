import React from 'react';
import Hero from '../Components/Hero';
import BestDoctors from '../Components/BestDoctors';
import MedicalServices from '../Components/MedicalServices';
import { useLoaderData } from 'react-router';

const Home = () => {
    const professionalsData = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <BestDoctors professionalsData={professionalsData}></BestDoctors>
            <MedicalServices></MedicalServices>
        </div>
    );
};

export default Home;