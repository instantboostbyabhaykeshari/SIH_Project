import Template from "../Components/Template";
import signupImg from "../assets/signup.png";

function Signup({ setIsLoggedIn }) {
  return (
    <Template
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Signup;
