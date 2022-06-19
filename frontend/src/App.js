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
          <Route path="/">
            <Route path="login" element={<Login />}/>
            <Route index element={<Home />} />
            <Route path="category">
              <Route index element={<CategoryDetail />}/>
            </Route>
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="borrowstatus" element={<BorrowStatus />}>
              
            </Route>
          </Route>

          {/* not found routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
