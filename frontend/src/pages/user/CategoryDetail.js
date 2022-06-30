import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/css/CategoryDetail.css";

// Import Data from Firebase
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import layouts
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";
import SideNavbar from "../../layouts/Navbar/SideNavbar";

// Images
import coverbook from "../../components/images/projects/coverbook.jpg";
import Modal from "../../components/Modal/Modal";

const CategoryDetail = () => {
  const [books, setBooks] = useState([]);
  const [searchBooksTitle, setSearchBooksTitle] = useState("")
  const [categories, setCategory] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()});
        });
        setCategory(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()

    const unsub = onSnapshot(
      collection(db, "books"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
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

  // const handleSearchBooksByCategory = (e) => {
  //   console.log(e.target.value)
  //   if(e.target.value==="All") {
  //     setSearchBooksCategory(e.target.value)
  //   } else if (e.target.value==="Teknologi") {
  //     setSearchBooksCategory(e.target.value.filter(book => book.book_category===e.target.value))
  //   }
  // }

  if(books.length === 0) {
    return (<p>Loading...</p>)
  }

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
                  <h1 className="banner-title">Library</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="main-container" className="main-container">
        <div className="container">
          <div className="row">
          <div className="col-lg-4 order-1 order-lg-0">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Cari Buku.."
          aria-label="Search"
          onChange={event => {setSearchBooksTitle(event.target.value)}}
        />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div className="sidebar sidebar-left">
        <div className="widget">
          <h3 className="widget-title mt-4">Kategori</h3>
          {categories.map((category) => (
          <ul className="arrow nav nav-tabs">
            <li>
              <a href="/#">{category.category_name}</a>
              {/* <a href="/#">Sementara</a> */}
            </li>
          </ul>
          ))}
          {/* <ul className="arrow nav nav-tabs category-filter fs-2">
            <button value="Teknologi" type="button" className="btn btn-link " styles={{color: "#FEB83C", textDecoration: "none"}} onClick={handleSearchBooksByCategory}>test</button>
            <button value="Self Development" type="button" className="btn btn-link " styles={{color: "#FEB83C", textDecoration: "none"}} onClick={handleSearchBooksByCategory}>Self Development</button>
            <button value="Bahasa" type="button" className="btn btn-link " styles={{color: "#FEB83C", textDecoration: "none"}} onClick={handleSearchBooksByCategory}>Bahasa</button>
          </ul> */}
        </div>
        
      </div>
      {/* Sidebar end */}
    </div>

            <div className="col-lg-8 mb-5 mb-lg-0 order-0 order-lg-1">
              <div className="row text-center justify-content-around">
                {books.filter((book) => {
                  if(searchBooksTitle === "")  {
                    return book 
                  } else if (book.book_title.toLowerCase().includes(searchBooksTitle.toLowerCase())) {
                    return book
                  } 
                }).map((book, key) => (
                  <>
                    <Modal
                      key={key}
                      id={book.id}
                      title={book.book_title}
                      description={book.book_description}
                      author={book.book_author}
                      publisher={book.book_publisher}
                      total={book.book_total}
                      img={book.img}
                      timestamp={book.book_timeStamp}
                      books={book}
                    />
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
