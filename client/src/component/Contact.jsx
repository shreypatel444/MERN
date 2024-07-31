import React from "react";
import { useState } from "react";
import "../style/Contact.css"
import {toast} from "react-toastify"
import { AuthComsumer } from "../store/auth";

export default function Contact() {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const { user } = AuthComsumer();

  if (user && userData) {
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  const changed = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
      const res_data = await response.json();
      if(response.ok){
        setData({
          username: user.username,
          email: user.email,
          message: "",
        })
        toast.success("message send succesfully...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_contact">
    <div className="contact-form-container">
      <h2 className="heading_contact">Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={data.username}
            onChange={changed}
            required
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={changed}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
