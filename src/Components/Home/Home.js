import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../Assets/Logo.png";
import background from "../../Assets/Background.png";
function Home() {
  return (
    <div class="container">
      <div class="left-content">
        <div class="logo">
          <img src={logo} alt="logo" width="40" height="50" />
        </div>
        <div class="title_1">
          <h2>Welcome to Our Platform!</h2>
          <Link to="/signup">
            <button className="sign">Sign up</button>
          </Link>
          <p className="question">
            Do you already have an account?{" "}
            <Link to="/login">
              <button className="sign">Log in</button>
            </Link>
          </p>
        </div>
      </div>
      <div class="right-content">
        <img src={background} alt="background" />
      </div>
    </div>
  );
}

export default Home;
