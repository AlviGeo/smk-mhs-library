import React from "react";
import { Link } from "react-router-dom";

// Images
import project1 from "../components/images/home/book.png";

const HomeCategory = () => {
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
