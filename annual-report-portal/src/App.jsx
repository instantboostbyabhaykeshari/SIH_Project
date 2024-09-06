
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Login-components/Navbar"
import Home from './Login-components/Home';
import Login from './Login-components/Login';
import Signup from './Login-components/Signup';
import Dashboard from './Login-components/Dashboard';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="w-screen h-[100vh] bg-[#F5F5F5] flex flex-col ">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
