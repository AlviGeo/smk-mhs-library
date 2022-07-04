import React from "react";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";

// Images
import contacting from "../../components/images/home/contact1.png";
import gambarMarker from "../../components/images/home/marker.png";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="column-title">Kontak</h3>
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

      {/* <section id="main-container" class="main-container">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <h2 class="section-title">Reaching our Office</h2>
              <h3 class="section-sub-title">Find Our Location</h3>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="ts-service-box-bg text-center h-100">
                <span class="ts-service-icon icon-round">
                  <i class="fas fa-map-marker-alt mr-0"></i>
                </span>
                <div class="ts-service-box-content">
                  <h4>Visit Our Office</h4>
                  <p>9051 Constra Incorporate, USA</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="ts-service-box-bg text-center h-100">
                <span class="ts-service-icon icon-round">
                  <i class="fa fa-envelope mr-0"></i>
                </span>
                <div class="ts-service-box-content">
                  <h4>Email Us</h4>
                  <p>office@Constra.com</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="ts-service-box-bg text-center h-100">
                <span class="ts-service-icon icon-round">
                  <i class="fa fa-phone-square mr-0"></i>
                </span>
                <div class="ts-service-box-content">
                  <h4>Call Us</h4>
                  <p>(+9) 847-291-4353</p>
                </div>
              </div>
            </div>
          </div>

          <div class="gap-60"></div>

          <div class="google-map">
            <div
              id="map"
              class="map"
              data-latitude="40.712776"
              data-longitude="-74.005974"
              data-marker={gambarMarker}
              data-marker-name="SMK MHS"
            ></div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
};

export default Contact;
