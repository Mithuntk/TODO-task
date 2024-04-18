import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Firebase/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import background from "../../Assets/Background.png";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" width="40" height="50" />
      </div>
      <div className="login-container ">
        <h2>Login</h2>
        <form onClick={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <Link to="/signup">
            <button className="out" type="out">
              Signup
            </button>
          </Link>
        </form>
      </div>
      <div class="right-content">
        <img src={background} alt="background" />
      </div>
    </div>
  );
}

export default Login;
