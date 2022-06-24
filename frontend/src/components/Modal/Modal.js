import React, {useContext} from "react";
import project1 from "../images/projects/project1.jpg";

// Import Context
import {AuthContext} from "../../context/AuthContext";

import { Link } from "react-router-dom";
import coverbook from "../../components/images/projects/coverbook.jpg";


function Modal({ id, title, description, author, publisher, status, img, timestamp, book }) {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="col-lg-3 m-2" >
      <div className="project-img-container row" data-toggle="modal" data-target={`#${id}`}>
        <img
          className="img-fluid book-detail mx-auto"
          src={img}
          alt="project-img"
          style={{width: "140px", height: "140px"}}
          
        />
        {/* Description */}
        <div className="project-item-info d-flex mx-auto">
          <div className="project-item-info-content">
            <h4 href="project-item-title">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Toggle Modal */}
      <div
                className="modal fade"
                id={id}
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
                            src={img}
                            width="150"
                            height="180"
                            alt="Book Cover"
                          />
                        </div>
                        <div className="col-6 text-left">
                          <h4>{title}</h4>
                          <p className="project-cat">Author: {author} </p>
                          <p className="project-cat">Publisher: {publisher}</p>
                          <p className="project-cat">Date Published: {} </p>
                          <p className="project-cat">Available: {status} </p>
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
                        <Link to="/borrowstatus" className="btn btn-primary">
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
    </div>
  );
}

export default Modal;
