import React from "react";
import { Link } from "react-router-dom";

// Images
import project1 from "../components/images/projects/project1.jpg";

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
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="all"
                    defaultValue="all"
                    defaultChecked="checked"
                  />
                  Tampilkan Semua
                </label>
                <label htmlFor="commercial">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="commercial"
                    defaultValue="commercial"
                  />
                  Keuangan
                </label>
                <label htmlFor="government">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="government"
                    defaultValue="government"
                  />
                  Agama
                </label>
                <label htmlFor="infrastructure">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="infrastructure"
                    defaultValue="infrastructure"
                  />
                  Bahasa
                </label>
                <label htmlFor="residential">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="residential"
                    defaultValue="residential"
                  />
                  Teknologi
                </label>
                <label htmlFor="healthcare">
                  <input
                    type="radio"
                    name="shuffle-filter"
                    id="healthcare"
                    defaultValue="healthcare"
                  />
                  Lainnya
                </label>
                <input
                  className="cari-buku"
                  type="text"
                  placeholder="Cari Judul Buku..."
                />
              </div>
              {/* project filter end */}

              <div className="row shuffle-wrapper">
                <div className="col-1 shuffle-sizer" />
                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["government","healthcare"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project1.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">
                            Capital Teltway Building
                          </a>
                        </h3>
                        <p className="project-cat">Commercial, Interiors</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shuffle item 1 end */}

                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["healthcare"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project2.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">Ghum Touch Hospital</a>
                        </h3>
                        <p className="project-cat">Healthcare</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shuffle item 2 end */}

                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["infrastructure","commercial"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project3.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">TNT East Facility</a>
                        </h3>
                        <p className="project-cat">Government</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shuffle item 3 end */}

                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["education","infrastructure"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project4.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">
                            Narriot Headquarters
                          </a>
                        </h3>
                        <p className="project-cat">Infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shuffle item 4 end */}

                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["infrastructure","education"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project5.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">Kalas Metrorail</a>
                        </h3>
                        <p className="project-cat">Infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* shuffle item 5 end */}

                <div
                  className="col-lg-4 col-md-6 shuffle-item"
                  data-groups='["residential"]'
                >
                  <div className="project-img-container">
                    <a
                      className="gallery-popup"
                      href="images/projects/project6.jpg"
                      aria-label="project-img"
                    >
                      <img
                        className="img-fluid"
                        src={project1}
                        alt="project-img"
                      />
                      <span className="gallery-icon">
                        <i className="fa fa-plus" />
                      </span>
                    </a>
                    <div className="project-item-info">
                      <div className="project-item-info-content">
                        <h3 className="project-item-title">
                          <a href="projects-single.html">
                            Ancraft Avenue House
                          </a>
                        </h3>
                        <p className="project-cat">Residential</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="general-btn text-center">
                <Link className="btn btn-primary" to="/category">
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
