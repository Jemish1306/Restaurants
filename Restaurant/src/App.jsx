import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Registration } from "./Components/Auth/Registration";
import { ForgetPassword } from "./Components/Auth/ForgetPassword";
import { Login } from "./Components/Auth/Login";
import { Dashboard } from "./Components/Admin/Deshboard";
import ProfilePage from "./Components/Admin/ProfilePage";

const App = () => {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/deshbord" element={<Dashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      
    </>
  );
};

export default App;
