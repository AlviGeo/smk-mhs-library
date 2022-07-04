import React, { useState, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import Routes
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import CategoryDetail from "./pages/user/CategoryDetail";
import InformationLink from "./pages/home/InformationLink";
import AboutUs from "./pages/home/AboutUs";
import Contact from "./pages/home/Contact";
import UserBookStatus from "./pages/UserBookStatus";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import BorrowStatus from "./pages/user/BorrowStatus";

// Import Context
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log(currentUser);

  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="category" element={<CategoryDetail />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="borrowstatus/:id"
            element={
              <RequireAuth>
                <BorrowStatus />
              </RequireAuth>
            }
          ></Route>
        </Route>

        {/* not found routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
