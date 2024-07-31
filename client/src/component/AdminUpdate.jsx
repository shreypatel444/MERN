import React from "react";
import { AuthComsumer } from "../store/auth";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    contact: "",
  });

  const params = useParams();
  const { authorizationToken } = AuthComsumer();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/user/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const res_data = await response.json();
      const correctData = res_data.message;
      setData(correctData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const Changed = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const submitted = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8080/admin/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated succesfully...");
      } else {
        toast.error("Not updated");
      }
    } catch (error) {
      console.log(error);
    }
    setData({
      username: "",
      email: "",
      contact: "",
    });
  };

  return (
    <>
      <div className="main-form">
        <div className="title">
          <h2>Update Form</h2>
        </div>
        <div className="content">
          <form onSubmit={submitted}>
            <input
              type="text"
              placeholder="Write your Username"
              name="username"
              value={data.username}
              onChange={Changed}
            />
            <br />
            <input
              type="text"
              placeholder="Write your E-Mail"
              name="email"
              value={data.email}
              onChange={Changed}
            />
            <br />
            <input
              type="text"
              placeholder="Write your Contact"
              name="contact"
              value={data.contact}
              onChange={Changed}
            />
            <br />
            <button type="submit" className="btn btn-center">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
