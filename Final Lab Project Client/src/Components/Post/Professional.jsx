import React, { use, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Professional = () => {
    const { User, LogIn } = use(AuthContext);
    const handleProfessionalPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const professionalsData = Object.fromEntries(formData.entries());
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, post it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (User.email == professionalsData.email && professionalsData.role == "Professional-rental") {
                    LogIn(User.email, professionalsData.confirmPassword)
                        .then(result => {
                            fetch('http://localhost:3000/professionals', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(professionalsData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                })
                            Swal.fire({
                                title: "Posted!",
                                text: "Your details has been posted.",
                                icon: "success"
                            });
                            form.reset();
                        })
                        .catch(error => {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Wrong Password!",
                            });
                        })
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Wrong Email or Role!",
                    });
                }


            }
        });
    }
    return (
        <div className='py-16 px-28 flex flex-col justify-center rounded-4xl bg-[#1d536416]'>
            <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Professional Information</h1>
            <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-4 md:mb-6'>Book professionals need more than visibility—they need the right network.
                Our platform empowers authors, editors, and publishers to showcase their expertise, connect with collaborators, and grow their presence in the literary world</p>
            <form onSubmit={handleProfessionalPost} className='grid grid-cols-2 gap-6'>
                <input name='name' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Name" required />
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
                <input name='phoneNumber' type="text" className="col-span-2 input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm col-span-2" placeholder="Phone Number" />
                <input name='photoURL' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 pjsm" placeholder="Image URL" required />
                <input name='currentlyWorking' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 pjsm" placeholder="Currently Working" required />
                <div className="w-full pjsr flex flex-col col-span-2 pjsm">
                    <select
                        id="experience"
                        name="experience"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Experience</option>
                        <option value="Entry">Entry Level (0–1 years)</option>
                        <option value="Intermediate">Intermediate (2–4 years)</option>
                        <option value="Experienced">Experienced (5–7 years)</option>
                        <option value="Senior">Senior (8+ years)</option>
                    </select>
                </div>
                <input name='fee' type="number" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Fee" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="feeBasis"
                        name="feeBasis"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Fee Per</option>
                        <option value="hour">Hour</option>
                        <option value="session">Session</option>
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="project">Project</option>
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
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="availability"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Select Availability</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <textarea id="review" name="Bio" rows="4" className="rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 mt-1 block px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Details about yourself..." ></textarea>
                <input name='email' type="email" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full" placeholder="Email" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="role"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                    >
                        <option value="">Select Role</option>
                        <option value="Professional-rental">Professional/Rent</option>
                        <option value="Customer">Customer</option>
                    </select>
                </div>
                <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" required />
                <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                    Post
                </button>
            </form>
        </div>
    );
};

export default Professional;