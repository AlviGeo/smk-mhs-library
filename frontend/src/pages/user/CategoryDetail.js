import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import Data from Firebase
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import layouts
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";
import SideNavbar from "../../layouts/Navbar/SideNavbar";

// Images
import project1 from "../../components/images/projects/project1.jpg";
import coverbook from "../../components/images/projects/coverbook.jpg";
import Modal from "../../components/Modal/Modal";

const CategoryDetail = () => {
  const [books, setBooks] = useState([]);
  const usersCollectionRef = collection(db, "books");

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "books"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
        setBooks(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  // Dummy data
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
              <div className="row text-center justify-content-around">
                {books.map((book) => (
                  <>
                    <Modal
                      key={book.id}
                      id={book.id}
                      title={book.book_title}
                      description={book.book_description}
                      author={book.book_author}
                      publisher={book.book_publisher}
                      status={book.book_status}
                      img={book.img}
                      timestamp={book.book_timeStamp}
                      books={book}
                    />
                    {console.log(book)}
                  </>
                ))}
              </div>

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
