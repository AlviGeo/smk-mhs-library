import React from "react";
import Navbar from "../../layouts/Navbar/Navbar";

// Images
import aboutus from "./../../components/images/home/aboutus.png";
import Footer from "../../layouts/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="column-title">Tentang Kami</h3>
              <p>
                Diisi sesuai yang diinginkan. minim tempor ipsum aliquip in sit veniam incididunt eiusmod nostrud.
              </p>
              <br />
              <p>Velit laboris reprehenderit id esse minim eu in sint ad enim. Proident quis laboris tempor nulla adipisicing eiusmod deserunt sint sunt sint nisi reprehenderit et quis. Proident occaecat ea duis ullamco minim esse sunt ipsum eiusmod officia.</p>
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div id="page-slider" className="page-slider small-bg">
                <div className="item">
                  <div className="container">
                    <img
                      className="float-right mr-5"
                      src={aboutus}
                      alt="Contact Us"
                      style={{ width: "350px", height: "300px" }}
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

export default AboutUs;
