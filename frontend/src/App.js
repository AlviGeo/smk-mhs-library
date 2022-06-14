import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

// Import React Router
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import CategoryDetail from "./pages/home/CategoryDetail";
import InformationLink from "./pages/home/InformationLink";
import AboutUs from "./pages/home/AboutUs";
import Contact from "./pages/home/Contact";
import UserBookStatus from "./pages/UserBookStatus";
import NotFound from "./pages/NotFound";
import Register from "./pages/auth/Register";
import PrivateRoutes from "./routes/PrivateRoutes";
import BorrowStatus from "./pages/user/BorrowStatus";

const App = () => {

  return (
    <>
        <Routes>
          {/* public routes */}
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="category" exact element={<CategoryDetail />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />

          {/* private routes */}
          <Route path="booklist" element={<UserBookStatus />} />
          <Route path="bookstatus" element={<BorrowStatus />} />
          {/* <Route path="information" element={<InformationLink />} /> */}
          {/* <Route path="admin" element={<AdminDashboard />} /> */}

          {/* not found routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
