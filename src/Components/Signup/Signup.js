import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../Store/Firebase/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import background from "../../Assets/Background.png";
import "./Signup.css";
function Register() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection("users").add({
            id: result.user.uid,
            username: username,
          });
        });
      })
      .then(() => {
        setLoading(false);
        history("/login"); // or navigate('/login');
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
        setLoading(false);
        alert(error.message);
      });
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="logo" width="40" height="50" />
      </div>
      <div className="register">
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              autoComplete='username"'
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              defaultValue="Doe"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              defaultValue="Doe"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="confirm-password"
              defaultValue="Doe"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <Link to="/login">
          {" "}
          <button className="out" type="out">
            Login
          </button>
        </Link>
      </div>
      <div class="right-content">
        <img src={background} alt="background" />
      </div>
    </div>
  );
}

export default Register;
