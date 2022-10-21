import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../firebase-config";

// Images
import project1 from "../components/images/home/book.png";

const HomeCategory = () => {
  const [books, setBooks] = useState([]);
  var res = Math.max.apply(Math,books.map(function(book){return book.times_borrowed;}))
  var obj = books.find(function(o){ return o.times_borrowed == res; })

  // console.log(JSON.stringify(obj))
  

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "books"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => {
        list.push({id:doc.id, ...doc.data()});
      })
      setBooks(list)
    }, (error) => {
      console.log(error);
    })
    return () => {
      unsub();
    }
  }, []);

  return (
    <div>
      <section id="project-area" className="project-area solid-bg">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <h3 className="section-sub-title">Kategori Buku</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className="row">
            <div className="col-12">
              <div className="shuffle-btn-group">
                <label className="active" htmlFor="all">
                  Tampilkan Semua
                </label>
              </div>
              {/* project filter end */}

              <div className="row">
                <div className="col-1" />
                {/* {books.map((book) => {
                  const max = book.times_borrowed.reduce(function(prev, current) {
                    return (prev.y > current.y) ? prev : current
                })
                })} */}
                <div className="col-lg-3 col-md-6 col-sm-4">
                  <div className="card" styles={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={project1}
                      alt="project-img"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-4">
                  <div className="card" styles={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={project1}
                      alt="project-img"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-4">
                  <div className="card" styles={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={project1}
                      alt="project-img"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                {/* shuffle item 1 end */}
              </div>
            </div>

            <div className="col-12">
              <div className="general-btn text-center">
                <Link className="btn btn-warning" to="/category">
                  Lihat Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCategory;
