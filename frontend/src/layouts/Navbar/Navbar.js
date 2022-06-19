import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Auth

// Images
import logo from "../../components/images/logo-mhs.png";

const Navbar = ({ children }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div className="body-inner">
      <div id="top-bar" className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="top-info text-center text-md-left">
                <li>
                  <i className="fas fa-map-marker-alt" />{" "}
                  <p className="info-text">
                    Jl. Kuda Laut, Sungai Jodoh, Kec. Batu Ampar, Kota Batam,
                    Kepulauan Riau 29451
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
              <ul className="list-unstyled">
                <li>
                  <a
                    title="Facebook"
                    href="https://facebbok.com/themefisher.com"
                  >
                    <span className="social-icon">
                      <i className="fab fa-facebook-f" />
                    </span>
                  </a>
                  <a title="Twitter" href="https://twitter.com/themefisher.com">
                    <span className="social-icon">
                      <i className="fab fa-twitter" />
                    </span>
                  </a>
                  <a
                    title="Instagram"
                    href="https://instagram.com/themefisher.com"
                  >
                    <span className="social-icon">
                      <i className="fab fa-instagram" />
                    </span>
                  </a>
                  <a title="Linkdin" href="https://github.com/themefisher.com">
                    <span className="social-icon">
                      <i className="fab fa-github" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header id="header" className="header-one">
        <div className="bg-white">
          <div className="container">
            <div className="logo-area">
              <div className="row align-items-center">
                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                  <a className="d-block" href="index.html">
                    <img
                      loading="lazy"
                      style={{
                        width: "70px",
                        height: "90px",
                        overflowX: "visible",
                      }}
                      src={logo}
                      alt="Multistudi High School"
                    />
                  </a>
                </div>
                {/* logo end */}
                <div className="col-lg-9 header-right">
                  <ul className="top-info-box">
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Call Us</p>
                          <p className="info-box-subtitle">+62-811-7009-959</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="info-box">
                        <div className="info-box-content">
                          <p className="info-box-title">Email Us</p>
                          <p className="info-box-subtitle">
                            humasmhs@multistudi.sch.id
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="last">
                      <div className="info-box last">
                        <div className="info-box-content">
                          <p className="info-box-title">
                            <i className="fa fa-clock-o" /> Open at:
                          </p>
                          <p className="info-box-subtitle">
                            Mon - Fri: 9:00 - 18:30
                          </p>
                        </div>
                      </div>
                    </li>
                    {"test" ? (
                      <li className="header-get-a-quote">
                        <NavLink
                          to="/"
                          className="btn btn-primary"
                        >
                          Logout
                        </NavLink>
                      </li>
                    ) : (
                      <li className="header-get-a-quote">
                        <NavLink to="/login" className="btn btn-primary">
                          Login
                        </NavLink>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Navbar */}
        <div className="site-navigation">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-dark p-0">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    id="navbar-collapse"
                    className="collapse navbar-collapse"
                  >
                    <ul className="nav navbar-nav mr-auto">
                      <li className="nav-item dropdown active">
                        <NavLink to="/" style={style} className="nav-link">
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/category"
                          style={style}
                          className="nav-link"
                        >
                          Kategori
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/aboutus" className="nav-link">
                          Tentang Kami
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink to="/contact" className="nav-link">
                          Kontak
                        </NavLink>
                      </li>
                      {"test" ? (
                        <li className="nav-item">
                          <NavLink to="/borrowstatus" className="nav-link">
                            Status Pinjam
                          </NavLink>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <NavLink to="/admin" className="nav-link">
                            Admin
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
