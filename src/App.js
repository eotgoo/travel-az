import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/Home/HomePage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      handleClose();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <>
      <ResponsiveAppBar
        logout={logout}
        login={login}
        user={user}
        openModal={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
