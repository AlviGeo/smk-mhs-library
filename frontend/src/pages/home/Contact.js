import React from "react";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";

// Images
import profile from "./../../components/images/aboutus.png";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-content-center mt-5">
        <h3>Kontak</h3>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-2">
          <img
                      loading="lazy"
                      style={{
                        width: "200px",
                        height: "90px",
                        float: "left"
                      }}
                      src={profile}
                      alt="Multistudi High School"
                    />
          </div>
          <div className="col-sm-2">lorem ipsum</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
