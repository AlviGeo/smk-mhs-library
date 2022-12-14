import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import Context
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase-config";

// Images
import logo from "../../components/images/logo-mhs.png";

const Navbar = ({ children }) => {
  const { dispatch: authDispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => {
        // console.log(doc.id)
        list.push({id:doc.id, ...doc.data()});
      })
      setUsers(list)
    }, (error) => {
      console.log(error);
    })
    return () => {
      unsub();
    }
  }, []);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        authDispatch({
          type: "LOGOUT",
          payload: window.localStorage.removeItem("user"),
        });
        navigate("/");
        Swal.fire("", "Success Logout!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { currentUser } = useContext(AuthContext);

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
                    href="https://wa.me/message/VZUJ34AED3LEF1"
                    aria-label="Email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/SMK-MULTISTUDI-HIGH-SCHOOL-BATAM-725746664149136/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/smk_multistudi_batam/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCftjInE04jsLOo3PO-mtsYg"
                    aria-label="Email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SMK_MHS_BATAM?lang=en"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>

                <li>
                  <a
                    href="http://humasmhs@multistudi.sch.id/"
                    aria-label="Email"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-envelope" />
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
                  <a className="d-block" href="/">
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
                    {currentUser ? (
                      <></>
                    ) : (
                      <li className="header-get-a-quote">
                        <NavLink to="/login" className="btn btn-warning">
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
                      <li className="nav-item dropdown">
                        <NavLink to="/"  className="nav-link">
                          Home
                        </NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink
                          to="/category"
                          className="nav-link"
                        >
                          Library
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
                      {currentUser ? (
                        <li className="nav-item">
                          <NavLink
                            to={`/borrowstatus/${currentUser.uid}`}
                            className="nav-link"
                          >
                            Status Pinjam
                          </NavLink>
                        </li>
                      ) : (
                        <li className="nav-item">
                          <a href="https://mhs-library-5a9e5.web.app" target="_blank" rel="noreferrer" className="nav-link">
                            Admin
                          </a>
                        </li>
                      )}
                    </ul>
                    {currentUser ? (
                    <ul class="nav navbar-nav ml-auto">
                    <NavLink
                      to="/"
                      onClick={() => handleLogout()}
                      className="btn btn-danger btn-sm"
                    >
                      Logout
                    </NavLink></ul> ) : 
                        <></>
                    }
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
