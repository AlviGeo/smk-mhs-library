import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
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
  where,
  limit,
  orderBy,
  startAfter,
  limitToLast,
  startAt,
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import layouts
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";
import Pagination from "../../components/Pagination/Pagination";

// Images
import Modal from "../../components/Modal/Modal";

const CategoryDetail = () => {
  const [books, setBooks] = useState([]);
  const [searchBooksTitle, setSearchBooksTitle] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategory(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

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

  if (books.length === 0) {
    return <p>Loading...</p>;
  }

  const handleDropdownCategory = (e) => {
    console.log(e.target.value);
    setSelectedCategory(e.target.value);
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
   const paginate = (e, pageNumber) => {
    e.preventDefault();

    setCurrentPage(pageNumber)
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
                  onChange={(event) => {
                    setSearchBooksTitle(event.target.value);
                  }}
                />
                <button
                  className="btn btn-outline-warning my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="sidebar sidebar-left">
                <div className="widget">
                  <h3 className="widget-title mt-4">Kategori</h3>
                  <select className="select-button orm-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleDropdownCategory} >
                    <option className="select-option" value="" selected>All</option>
                    {category &&
                      category.map((cat) => {
                        return (
                          <option key={cat.id} value={cat.category_name}>
                            {cat.category_name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              {/* Sidebar end */}
            </div>

            <div className="col-lg-8 mb-5 mb-lg-0 order-0 order-lg-1">
              <div className="row text-center justify-content-around">
                {currentBooks
                  .filter((book) => {
                    if (searchBooksTitle === "") {
                      return book;
                    } else if (
                      book.book_title
                        .toLowerCase()
                        .includes(searchBooksTitle.toLowerCase())
                    ) {
                      return book;
                    }
                  })
                  .filter((book) => {
                    if (book.category == selectedCategory) {
                      console.log(book, selectedCategory);
                      return book;
                    } else if (selectedCategory === "") {
                      return book;
                    }
                  })
                  .map((book, key) => (
                    <>
                      {/* {console.log(book)} */}
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
              <Pagination
                postsPerPage={postsPerPage}
                totalBooks={books.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
