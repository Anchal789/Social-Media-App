import React, { useContext } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = ()=>{
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Bro Code Clan</h1>
            <p>A Social Media App</p>
            <span>Don't you have an account?</span>
            <Link to={"/register"}><button>Register</button></Link>
            
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" name="" placeholder="Username" id="" />
                <input type="password" name="" placeholder="Password" id="" />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
