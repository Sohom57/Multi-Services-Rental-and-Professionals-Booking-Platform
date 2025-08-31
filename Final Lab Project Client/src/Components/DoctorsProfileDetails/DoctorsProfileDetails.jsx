import React, { useContext, useEffect, useState } from 'react';
import FirstBanner from '../DoctorsProfileDetails/FirstBanner';
import SecondBanner from '../DoctorsProfileDetails/SecondBanner';
import ThirdBanner from '../DoctorsProfileDetails/ThirdBanner';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const DoctorsProfileDetails = () => {
    const professionalData = useLoaderData();
    const { User } = useContext(AuthContext);
    const [logedinUser, setLogedinUser] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                setLogedinUser(data.find(single => single.email == User.email));
            })
    }, [User.email]);
    return (
        <div>
            <FirstBanner professionalData={professionalData}></FirstBanner>
            <SecondBanner professionalData={professionalData}></SecondBanner>
            {
                logedinUser?.role != "Professional-rental" && <ThirdBanner professionalData={professionalData}></ThirdBanner>
            }
        </div>
    );
};

export default DoctorsProfileDetails;