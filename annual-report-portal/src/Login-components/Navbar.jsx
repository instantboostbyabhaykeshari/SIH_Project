import React from "react";
import logo from "../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const location = useLocation();

  return (
    <div className="flex justify-between items-center w-full py-4 px-8 bg-[#34495e] shadow-lg fixed top-0 left-0 z-50">
      <nav>
        <ul className="flex gap-x-10 text-white font-semibold text-lg">
          <li className="hover:text-[#e67e22] transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#e67e22] transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#e67e22] transition-colors duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#e67e22] transition-colors duration-300">
            <Link to="/contact">Working</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {/* Hide login button on login page */}
        {!isLoggedIn && location.pathname !== "/login" && (
          <Link to="/login">
            <button className="bg-[#2c3e50] text-white py-2 px-5 rounded-lg hover:bg-[#e67e22] hover:text-black transition-all duration-300 border border-[#2c3e50]">
              Login
            </button>
          </Link>
        )}
        {/* Hide signup button on signup page */}
        {!isLoggedIn && location.pathname !== "/signup" && (
          <Link to="/signup">
            <button className="bg-[#2c3e50] text-white py-2 px-5 rounded-lg hover:bg-[#e67e22] hover:text-black transition-all duration-300 border border-[#2c3e50]">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logout Successfully");
              }}
              className="bg-[#e74c3c] text-white py-2 px-5 rounded-lg hover:bg-[#c0392b] transition-all duration-300 border border-[#e74c3c]"
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-[#27ae60] text-white py-2 px-5 rounded-lg hover:bg-[#2ecc71] transition-all duration-300 border border-[#27ae60]">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
