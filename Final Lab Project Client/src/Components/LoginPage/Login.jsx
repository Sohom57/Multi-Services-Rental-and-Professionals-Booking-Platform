import React, { Suspense, use, useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const { createUser, setUser, updateUser } = useContext(AuthContext);

    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const validatePassword = (pwd) => {
        if (pwd.length < 6) return "Password must be at least 6 characters long.";
        if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter.";
        if (!/[a-z]/.test(pwd)) return "Password must contain at least one lowercase letter.";
        return "";
    };
    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setError(validatePassword(newPassword));
    };
    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        
        const formData = new FormData(form);
        const usersData = Object.fromEntries(formData.entries());
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(usersData)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
        })
        const validationMsg = validatePassword(password);
        if (validationMsg) {
            setError(validationMsg);
            return;
        }

        setError("");

        createUser(email, password)
            .then(result => {
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...result.user, displayName: name, photoURL: photo });
                        navigate('/');
                    })
                    .catch((error) => {
                        setUser(result.user);
                        navigate('/');
                    })
            })
            .catch(error => {
                alert("Email Already Registered");
            });
    };
    const {LogIn} = use(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LogIn(email, password)
        .then(result => {
            const User = result.user;
            navigate('/');
        })
        .catch(error => {
            alert("Email is Not Registered");
        })
    }

    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <div className="relative w-[768px] max-w-full min-h-[550px] bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] overflow-hidden">
                {/* Sign Up Form */}
                <div className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out ${isSignUp ? 'translate-x-0 opacity-100 z-20' : 'opacity-0 z-10'}`}>
                    <form onSubmit={handleRegistration} className="bg-white flex items-center justify-center flex-col px-10 h-full">
                        <h1 className="text-2xl pjsb">Create Account</h1>
                        <div className="my-5">
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaGoogle />
                            </Link>
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaFacebook />
                            </Link>
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaGithub />
                            </Link>
                        </div>
                        <span className="text-sm pb-2">or use your email for registration</span>
                        <input name='name' type="text" placeholder="Name" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full h-10 outline-none pjsr" />
                        <input name='photoURL' type="text" placeholder="Image URL" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full h-10 outline-none pjsr" />
                        <input name='email' type="email" placeholder="Email" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full h-10 outline-none pjsr" />
                        <input name='password' type="password" placeholder="Password" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full h-10 outline-none pjsr" value={password} onChange={handlePasswordChange}/>
                        <div className="w-full my-2 pjsr">
                            <select
                                id="role"
                                name="role"
                                className="bg-gray-200 px-4 py-2 text-sm rounded w-full h-10 outline-none"
                            >
                                <option value="">Select Role</option>
                                <option value="Professional-rental">Professional/Rent</option>
                                <option value="Customer">Customer</option>
                            </select>
                        </div>
                        {error && <p className="text-red-600 text-sm my-2">{error}</p>}
                        <button type='submit' className="bg-[#1d5364] text-white text-xs px-12 py-2 rounded font-semibold tracking-wider mt-2 cursor-pointer pjsb hover:bg-[#1d5364d7]">SIGN UP</button>
                    </form>
                </div>
                {/* Sign In Form */}
                <div className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out ${isSignUp ? 'translate-x-full opacity-0 z-10' : 'translate-x-0 opacity-100 z-20'}`}>
                    <form onSubmit={handleLogin} className="bg-white flex items-center justify-center flex-col px-10 h-full">
                        <h1 className="text-2xl pjsb">Sign In</h1>
                        <div className="my-5">
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaGoogle />
                            </Link>
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaFacebook />
                            </Link>
                            <Link className="border border-gray-300 rounded-[20%] inline-flex justify-center items-center mx-1 w-10 h-10">
                                <FaGithub />
                            </Link>
                        </div>
                        <span className="text-sm">or use your email password</span>
                        <input name='email' type="email" placeholder="Email" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full outline-none h-10" />
                        <input name='password' type="password" placeholder="Password" className="bg-gray-200 my-2 px-4 py-2 text-sm rounded w-full outline-none h-10" />
                        <Link className="text-[#102E50] text-xs underline my-[15px] pjssb">Forget Your Password?</Link>
                        <button type='submit' className="bg-[#1d5364] text-white text-xs px-12 py-2 rounded font-semibold tracking-wider mt-2 cursor-pointer hover:bg-[#1d5364d7]">SIGN IN</button>
                        {error && <p className="text-red-600 text-sm my-2">{error}</p>}
                    </form>
                </div>
                

                {/* Toggle Panel */}
                <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-500 ease-in-out rounded-[150px_0_0_100px] z-[1000]">
                    <div className={`bg-[#1d5364] text-white absolute left-[-100%] w-[200%] h-full transform transition-all duration-500 ease-in-out ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'}`}>
                        {/* Left Panel */}
                        <div className="absolute w-1/2 h-full flex items-center justify-center flex-col px-7 text-center top-0">
                            <h1 className="text-2xl pjsb">Welcome Back!</h1>
                            <p className="text-sm leading-5 tracking-wide my-5 pjsr">Enter your personal details to use all of site features</p>
                            <Link onClick={() => setIsSignUp(false)} className="border border-white bg-transparent text-white text-xs px-12 py-2 rounded font-semibold tracking-wider uppercase mt-2 cursor-pointer">Sign In</Link>
                        </div>

                        {/* Right Panel */}
                        <div className="absolute right-0 w-1/2 h-full flex items-center justify-center flex-col px-7 text-center top-0">
                            <h1 className="text-2xl pjsb">Hey there,</h1>
                            <p className="text-sm leading-5 tracking-wide my-5 pjsr">Register with your personal details to use all of site features</p>
                            <Link onClick={() => setIsSignUp(true)} className="border border-white bg-transparent text-white text-xs px-12 py-2 rounded font-semibold tracking-wider uppercase mt-2 cursor-pointer">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
