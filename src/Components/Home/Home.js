// components/Home.js
import React from 'react';
import {Link} from 'react-router-dom'
import "./Home.css"
import logo from "../../Assets/Logo.png"
function Home() {
  return (
    <div className='main'>
      <div className='logo'>
       <img src={logo} alt="logo" width="40" height="50" ></img>
       </div>
       <div className='title_1'>
        <h2>Welcome to Our Platform!</h2>
          <Link to="/signup" ><button className='sign' >Sign up</button></Link>
          <p className='question'>Do you already have an account? <Link to="/login" ><button className='sign'>Log in</button></Link></p>
        </div>
    </div>
  );
}

export default Home;