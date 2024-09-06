import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";

const Template = ({ formType, setIsLoggedIn }) => {
  return (
    <div className="flex w-full py-12 mx-auto gap-y-0 gap-x-12 justify-between overflow-x-hidden border-b-2">
      

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        

    </div>
  );
};

export default Template;
