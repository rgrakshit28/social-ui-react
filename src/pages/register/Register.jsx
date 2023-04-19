import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./register.scss";

const Register = () => {

  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/auth/register', inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social.</h1>
          <p>
            A platform that connects you to close ones.
            This is the project mainly developed for showcase my skills.
            The Project is developed with technologies like React, Node, MySql, etc.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input required type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input required type="text" name="username" placeholder="Username" onChange={handleChange} />
            <input required type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input required type="password" name="password" placeholder="Password" onChange={handleChange} />
            {error &&
              <p>{error}</p>}
            <button type="submit" onClick={handleSubmit}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
