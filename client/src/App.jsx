import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Servicepage from "./pages/Servicepage";
import Contactpage from "./pages/Contactpage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import { Logout } from "./component/Logout";
import Adminlayouts from "./layouts/Adminlayouts";
import AdminUsers from "./component/AdminUsers";
import AdminContacts from "./component/AdminContacts";
import AdminUpdate from "./component/AdminUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={Aboutpage} />
        <Route path="/service" Component={Servicepage} />
        <Route path="/contact" Component={Contactpage} />
        <Route path="/login" Component={Loginpage} />
        <Route path="/signup" Component={Signuppage} />
        <Route path="/logout" Component={Logout} />
        <Route path="/admin" Component={Adminlayouts}>
          <Route path="user" Component={AdminUsers} />
          <Route path="contact" Component={AdminContacts} />
        </Route>
        <Route path="/admin/user/:id/edit" Component={AdminUpdate} />
      </Routes>
    </div>
  );
}

export default App;
