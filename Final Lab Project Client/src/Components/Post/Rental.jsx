import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Rental = () => {
    const { User, LogIn } = use(AuthContext);
    const handleProfessionalPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const rentalProductsData = Object.fromEntries(formData.entries());
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
                LogIn(User.email, rentalProductsData.confirmPassword)
                    .then(result => {
                        fetch('http://localhost:3000/rentalProducts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(rentalProductsData)
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
        });
    }
    return (
        <div className='py-16 px-28 flex flex-col justify-center rounded-4xl bg-[#1d536416]'>
            <h1 className='pjseb text-4xl sm:text-5xl/snug text-center mb-2 md:mb-4 text-[#1d5364]'>Add Rental Product</h1>
            <p className='pjsm text-[12px] sm:text-lg text-center text-[#0f0f0f98] mb-4 md:mb-6'>Make your equipment work for you.
                By listing your rental items on our platform, you connect with professionals who need exactly what you offer—whether it’s event gear, tools, or creative equipment. Easy to manage, safe to share, and built to help you earn</p>
            <form onSubmit={handleProfessionalPost} className='grid grid-cols-2 gap-6'>
                <input name='productName' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Product Name" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="category"
                        name="category"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Home & Kitchen">Home & Kitchen</option>
                        <option value="Beauty & Health">Beauty & Health</option>
                        <option value="Sports & Outdoors">Sports & Outdoors</option>
                        <option value="Books">Books</option>
                        <option value="Toys & Games">Toys & Games</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <input name='rentPrice' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Rent Price" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="availability"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Rent Duration</option>
                        <option value="perHour">Hourly</option>
                        <option value="perDay">Daily</option>
                        <option value="perWeek">Weekly</option>
                        <option value="perMonth">Monthly</option>
                    </select>
                </div>
                <input name='location' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Location" required />
                <input name='photoURL' type="text" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Image URL" required />
                <input name='quantity' type="number" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full pjsm" placeholder="Product Quantity" required />
                <div className="w-full pjsr flex flex-col pjsm">
                    <select
                        id="role"
                        name="availability"
                        className="bg-white px-2 py-2 text-sm border border-[#0f0f0f3f] rounded-md w-full h-10 outline-none pjsm text-[#0f0f0f]"
                        required
                    >
                        <option value="">Product Condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="veryGood">Very Good</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>
                <textarea id="review" name="Bio" rows="4" className="rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2 mt-1 block px-3 py-2 border border-gray-300 rounded-md bg-white" placeholder="Product details..." ></textarea>
                <input name='email' type="email" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Email" required />
                <input name='confirmPassword' type="password" className="input rounded-md focus:outline-none focus:border-[#1d5364] w-full col-span-2" placeholder="Confirm Password" required />
                <button type='submit' className="col-span-2 cursor-pointer inline-flex items-center justify-center w-auto px-4 py-3 sm:px-4 sm:py-3 font-bold leading-6 text-white bg-[#1d5364] border border-transparent rounded-2xl sm:w-auto hover:bg-[#1d5364d7] text-md sm:text-xl pjssb">
                    Post
                </button>
            </form>
        </div>
    );
};

export default Rental;