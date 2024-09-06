import React from 'react'
import signupImg from "../assets/signup.png";
import Template from './Template';


function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title=""
      desc1=""
      desc2=""
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup