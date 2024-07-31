import React from "react";
import { AuthComsumer } from "../store/auth";
import { useEffect, useState } from "react";
import "../style/Admins.css";

export default function AdminContacts() {
  const { authorizationToken } = AuthComsumer();

  const [contactdata, setContactdata] = useState([]);

  const getAllContactData = async () => {
    try {
      const response = await fetch("http://localhost:8080/admin/contact", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setContactdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/contact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        getAllContactData();
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
              <th>Message</th>
              <th>Detele</th>
            </tr>
          </thead>
          <tbody>
            {contactdata.map((curr, index) => {
              return (
                <tr key={index}>
                  <td>{curr.username}</td>
                  <td>{curr.email}</td>
                  <td>{curr.message}</td>
                  <td>
                    <button onClick={() => deleteContact(curr._id)}>Delete</button>
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
