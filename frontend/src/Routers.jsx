import React from "react";
import SignIn from "./components/user/login/login";
import Landing from "./components/user/landing/landing";
import { Routes, Route, Navigate } from 'react-router-dom';

// แล้วเปลี่ยนจาก Switch เป็น Routes และ Redirect เป็น Navigate
const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Landing/>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};


export default Routers;
