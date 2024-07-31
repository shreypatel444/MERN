import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthComsumer } from "../store/auth";
import "../style/Admins.css";

export default function AdminUsers() {
  const { authorizationToken } = AuthComsumer();

  const [user, setUser] = useState([]);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/admin/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/user/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-div">
        <section className="main-section">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>E-Mail</th>
                <th>Contact</th>
                <th>Update</th>
                <th>Detele</th>
              </tr>
            </thead>
            <tbody>
              {user.map((curr, index) => {
                return (
                  <tr key={index}>
                    <td>{curr.username}</td>
                    <td>{curr.email}</td>
                    <td>{curr.contact}</td>
                    <td>
                      <Link to={`${curr._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curr._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
