import React, { useState, useEffect } from "react";
import "../../components/css/CategoryDetail.css";

// Import Data from Firebase
import {
  collection,
  getDocs,
  onSnapshot,
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

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
              <form className="form-inline my-2 my-lg-2" >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Cari Buku.."
                  style={{width: "250px"}}
                  aria-label="Search"
                  onChange={(event) => {
                    setSearchBooksTitle(event.target.value);
                  }}
                />
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
                    if (book.category === selectedCategory) {
                      return book;
                    } else if (selectedCategory === "") {
                      return book;
                    }
                  })
                  .map((book, key) => (
                    <>
                      <Modal
                        key={key}
                        id={book.id}
                        title={book.book_title}
                        description={book.book_description}
                        author={book.book_author}
                        publisher={book.book_publisher}
                        total={book.book_total}
                        bookcode={book.book_code}
                        publishedDate={book.date_published}
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
