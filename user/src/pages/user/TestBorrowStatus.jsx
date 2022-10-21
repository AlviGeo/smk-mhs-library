import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

// Import Layouts
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

function TestBorrowStatus() {
  const { id } = useParams();
  
  return (
    <div>
      <Navbar />
        <h1>Hi</h1>
      <Footer />
    </div>
  )
}

export default TestBorrowStatus