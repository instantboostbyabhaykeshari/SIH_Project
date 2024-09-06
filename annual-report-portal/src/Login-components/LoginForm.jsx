import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }

    return (
        <div className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[450px] h-[450px] mx-auto mt-20 bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg text-slate-700">
            
                <h2 className="text-3xl font-semibold mb-10 text-center">
                    Login to Your Account
                </h2>
                <form onSubmit={submitHandler} className="flex flex-col gap-y-6">
                    <label className="w-full">
                        <p className="text-1.5xl text-richblack-5 mb-1 leading-[1.375rem]">
                            Email Address
                            <sup className=" ml-1 text-pink-400">*</sup>
                        </p>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            placeholder="Enter your email address"
                            onChange={changeHandler}
                            name="email"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border  focus:outline-none focus:border-indigo-400"
                        />
                    </label>

                    {/* Password Input */}
                    <label className="w-full relative">
                        <p className="text-1.5xl  text-richblack-5 mb-1 leading-[1.375rem]">
                            Password
                            <sup className="text-pink-400">*</sup>
                        </p>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            value={formData.password}
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            name="password"
                            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5 border  focus:outline-none focus:border-indigo-400"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[38px] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible
                                    fontSize={24}
                                    fill="#AFB2BF"
                                />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                        <Link to="#" className="text- font-normal  text-[#000] text- max-w-max ml-auto mt-7">
                            Forgot Password?
                        </Link>
                    </label>

                    {/* Submit Button */}
                    <button className="bg-blue-400   py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-white hover:bg-blue-600 transition duration-300">
                        Sign in
                    </button>
                </form>
            </div>
    );
};

export default LoginForm;
