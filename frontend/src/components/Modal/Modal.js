import React from "react";
import project1 from "../images/projects/project1.jpg";

function Modal({ id, title, description }) {
  return (
    <div className="col-lg-4 m-2">
      <div className="project-img-container row">
        <img
          className="img-fluid book-detail"
          src={project1}
          alt="project-img"
          data-toggle="modal"
          data-target="#toggleBook"
        />
        {/* Description */}
        <div className="project-item-info d-flex mx-auto">
          <div className="project-item-info-content">
            <h4 href="project-item-title">title</h4>
            <p>Keterangan Buku</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
