import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';
import SavedData from './SavedData';
import Swal from 'sweetalert2';

const Profile = () => {
    const { User, setUser, updateUser, LogIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [logedinUser, setLogedinUser] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                setLogedinUser(data.find(single => single.email == User.email));
            })
    }, [User.email]);
    const navigate = useNavigate();
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const usersData = Object.fromEntries(formData.entries());
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                LogIn(User.email, usersData.confirmPassword)
                    .then(result => {
                        fetch(`http://localhost:3000/users/${logedinUser._id}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(usersData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                Swal.fire("Saved!", "", "success");
                            })
                        setError("");
                        updateUser({ displayName: usersData.name, photoURL: usersData.photoURL })
                            .then((result) => {
                                setUser({ ...result.user, displayName: usersData.name, photoURL: usersData.photoURL });
                                navigate('/MyProfile');
                            })
                            .catch((error) => {
                            })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Wrong Password!",
                        });
                    })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };
    const handleChangePassword = (e) => {
        e.preventDefault();
        let timerInterval;
        Swal.fire({
            title: "Server is Busy!",
            html: "Try again later",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }
    return (
        <div className='w-screen px-40 py-6 flex flex-col justify-center gap-6'>
            <SavedData logedinUser={logedinUser}></SavedData>
            <div className='flex gap-8'>
                <div className='py-16 px-24 flex flex-col justify-center rounded-4xl bg-[#1d536416] w-2/3'>
                    <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Profile Details</h1>
                    <form onSubmit={handleUpdateProfile} className='grid grid-cols-2 gap-6'>
                        <input name='name' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Name" />
                        <input name='phoneNumber' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Phone Number" />
                        <input name='photoURL' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Image URL" required />
                        <input name='currentlyWorking' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Currently Working" />
                        <input name='presentAdd' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Address" />
                        <div className="w-full pjsr flex flex-col pjsm">
                            <select
                                id="skill"
                                name="skill"
                                className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                                required
                            >
                                <option value="">Skill</option>
                                <option value="Software Developer">Software Developer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Graphics Designer">Graphics Designer</option>
                                <option value="Video Editor">Video Editor</option>
                                <option value="Black Smith">Black Smith</option>
                                <option value="Tailor">Tailor</option>
                                <option value="Cobbler">Cobbler</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="w-full pjsr flex flex-col pjsm">
                            <select
                                id="gender"
                                name="gender"
                                className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                                required
                            >
                                <option value="">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <textarea id="review" name="Bio" rows="4" className="rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 mt-1 block px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Bio" ></textarea>
                        <input name='email' type="email" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Email" />
                        <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" />
                        <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                            Save Changes
                        </button>
                    </form>
                </div>
                <div className='py-8 px-14 flex flex-col justify-center rounded-4xl bg-[#1d536416] h-1/12 w-1/3'>
                    <h1 className='pjseb text-4xl sm:text-3xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Change Password</h1>
                    <form onSubmit={handleChangePassword} className='grid grid-cols-2 gap-6 mb-8'>
                        <input name='Password' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Password" />
                        <input name='newPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="New Password" />
                        <input name='conPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" />
                        <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:pt-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;