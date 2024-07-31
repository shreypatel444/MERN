import React from "react";
import { useState } from "react";
import "../style/Signup.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthComsumer } from "../store/auth";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });

  const {storeTokenInLocalStorage} = AuthComsumer();

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
      const response = await fetch("http://localhost:8080/signup", {
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
          username: "",
          email: "",
          password: "",
          contact: "",
        });
        toast.success("SignUp succesfully...");
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
    <div className="main_signup">
      <div className="signup-form-container">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.usename}
              onChange={changed}
              required
              autoComplete="off"
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={data.contact}
              onChange={changed}
              required
             autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <div className="other_signup">
          <button className="btn btn-success" onClick={()=>{navigate("/login")}}> Go for Login</button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
