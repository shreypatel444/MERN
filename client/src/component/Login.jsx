import React from "react";
import { useState } from "react";
import "../style/Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthComsumer } from "../store/auth";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLocalStorage } = AuthComsumer();

  const changed = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      storeTokenInLocalStorage(res_data.token);
      if (response.ok) {
        setData({
          email: "",
          password: "",
        });
        toast.success('Login Successfully...');
        navigate("/");
      }else{
        toast.error(res_data.ExtraDetails ? res_data.ExtraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="main_login">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={changed}
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={changed}
              required
              autoComplete="off"
            />
          </div>
          <button type="submit">Submit</button>
          <div className="other">
          <button className="btn btn-success" onClick={()=>{navigate("/signup")}}>Go for SignUp</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
