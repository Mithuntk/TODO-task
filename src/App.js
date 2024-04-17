import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from "./Components/Signup/Signup";
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <div>
    <Router>
      <Routes> {/* Use Routes component to wrap your Route elements */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </div>
          );
               }

export default App;