import React from "react";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";

// Images
import contacting from "../../components/images/home/contact1.png"

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="column-title">Contact</h3>
              <h5>
                Jika ada pertanyaan yang ingin disampaikan bisa menghubungi:
              </h5>
              <p>No. Telp: xxxxxx </p>
              <p>Email : mhs@gmail.com</p>
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div id="page-slider" className="page-slider small-bg">
                <div className="item">
                  <div className="container">
                    <img
                      className="float-right"
                      src={contacting}
                      alt="Contact Us"
                      style={{ width: "500px", height: "280px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
