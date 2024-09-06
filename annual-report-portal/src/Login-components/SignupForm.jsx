import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log(accountData);

    navigate("/dashboard");
  }

  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto mt-10 bg-white p-6 sm:p-8 md:p-10 shadow-lg rounded-lg">
      {/* Account Type Toggle */}
      <div className="flex bg-gray-100 p-1 gap-x-1 sm:gap-x-2 md:gap-x-4 rounded-full mb-6 justify-center">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-gray-700"
          } py-2 px-4 sm:px-5 md:px-6 rounded-full transition-all`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("faculty")}
          className={`${
            accountType === "faculty"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-gray-700"
          } py-2 px-4 sm:px-5 md:px-6 rounded-full transition-all`}
        >
          Faculty
        </button>
        <button
          onClick={() => setAccountType("administration")}
          className={`${
            accountType === "administration"
              ? "bg-blue-600 text-white"
              : "bg-transparent text-gray-700"
          } py-2 px-4 sm:px-5 md:px-6 rounded-full transition-all`}
        >
        Adminstration
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* Name Fields */}
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 mb-4">
          <label htmlFor="firstName" className="w-full">
            <p className="text-sm md:text-base font-semibold mb-2">First Name *</p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="border border-gray-300 rounded-md w-full p-2 md:p-3 text-gray-700"
            />
          </label>

          <label htmlFor="lastName" className="w-full">
            <p className="text-sm md:text-base font-semibold mb-2">Last Name *</p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="border border-gray-300 rounded-md w-full p-2 md:p-3 text-gray-700"
            />
          </label>
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email">
            <p className="text-sm md:text-base font-semibold mb-2">Email Address *</p>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              onChange={changeHandler}
              value={formData.email}
              name="email"
              className="border border-gray-300 rounded-md w-full p-2 md:p-3 text-gray-700"
            />
          </label>
        </div>

        {/* Password Fields */}
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 mb-6">
          <label className="w-full relative">
            <p className="text-sm md:text-base font-semibold mb-2">Create Password *</p>
            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="border border-gray-300 rounded-md w-full p-2 md:p-3 text-gray-700"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-sm md:text-base font-semibold mb-2">Confirm Password *</p>
            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="border border-gray-300 rounded-md w-full p-2 md:p-3 text-gray-700"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-10 cursor-pointer"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} />
              ) : (
                <AiOutlineEye fontSize={24} />
              )}
            </span>
          </label>
        </div>

        <button className="bg-blue-600 text-white py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 rounded-md w-full hover:bg-blue-700 transition-all">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
