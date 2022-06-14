import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Layouts
import Navbar from "../layouts/Navbar/Navbar";
import Footer from "../layouts/Footer/Footer";

// Import Auth
import { useAuth } from "../context/AuthContext";


const UserBookStatus = () => {
  const {currentUser} = useAuth();
  
  return (
    <div data-dismiss="modal">
      <Navbar />
      <h1>hoi</h1>
      <Footer />
    </div>
  );
};

export default UserBookStatus;
