import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// Import Data from Firebase
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase-config";

// Import layouts
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";
import SideNavbar from "../../layouts/Navbar/SideNavbar";

// Images
import project1 from "../../components/images/projects/project1.jpg";
import coverbook from "../../components/images/projects/coverbook.jpg";

const CategoryDetail = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const {currentUser} = useContext(AuthContext);

  const staticbooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      publisher: "Penguin Random House",
      publishedDate: "16 October 2018",
      available: true,
      coverbook: "../components/images/projects/coverbook.jpg",
    },
    {
      id: 2,
      title: "Ikigai",
      author: "Francesc Miralles",
      publisher: "Random House UK",
      publishedDate: "April 2016",
      available: true,
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publisher: "The Ralston Society",
      publishedDate: "1937",
      available: true,
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      publisher: "Penguin Random House",
      publishedDate: "16 October 2018",
      available: true,
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Francesc Miralles",
      publisher: "Random House UK",
      publishedDate: "April 2016",
      available: true,
    },
    {
      id: 6,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      publisher: "The Ralston Society",
      publishedDate: "1937",
      available: true,
    },
  ];

  return (
    <div>
      <Navbar />
      <div id="banner-area" className="banner-area detail-page">
        <div className="banner-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner-heading">
                  <h1 className="banner-title">List Buku</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
            <SideNavbar />

            <div className="col-lg-8 mb-5 mb-lg-0 order-0 order-lg-1">
              <div className="row text-center">
                {staticbooks.map((book) => (
                  <>
                    <div className="col-lg-4">
                      <div className="project-img-container">
                        <img
                          className="img-fluid book-detail"
                          src={project1}
                          alt="project-img"
                          data-toggle="modal"
                          data-target="#toggleBook"
                        />
                        {/* Description */}
                        <div className="project-item-info">
                          <div className="project-item-info-content">
                            <h3 className="project-item-title"></h3>
                            <h4 href="projects-single.html">
                              {book.book_title}
                            </h4>
                            <p>Keterangan Buku</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* Toggle Modal */}
              <div
                className="modal fade"
                id="toggleBook"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Book Detail
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-6">
                          <img
                            className="modal-book-detail"
                            src={coverbook}
                            width="150"
                            height="180"
                            alt="Book Cover"
                          />
                        </div>
                        <div className="col-6 text-left">
                          <h4>Judul Buku</h4>
                          <p className="project-cat">Author: </p>
                          <p className="project-cat">Publisher: </p>
                          <p className="project-cat">Date Published: </p>
                          <p className="project-cat">Available: </p>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Tutup
                      </button>
                      {currentUser ? (
                        <Link to="/booklist" className="btn btn-primary">
                          Pinjam
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Modal */}

              {/* Pagination Slides */}
              <hr />
              <nav className="paging" aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      <i className="fas fa-angle-double-left" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="/#">
                      <i className="fas fa-angle-double-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
