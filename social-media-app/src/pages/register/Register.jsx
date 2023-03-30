import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Bro Code Clan</h1>
          <p>A Social Media App</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}><button>Login</button></Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input type="text" name="userName" placeholder="Username" id="" />
            <input type="email" name="email" placeholder="Email" id="" />
            <input type="password" name="password" placeholder="Password" id="" />
            <input type="text" name="name" placeholder="Name" id="" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
