import React, { useContext } from "react";

// Import Context
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase-config";
import {
  collection,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  documentId,
  getDocs,
  Timestamp,
  updateDoc
} from "firebase/firestore";

// Alert
import Swal from "sweetalert2";
// Date Formating
import moment from "moment";

function Modal({
  id,
  title,
  description,
  author,
  publisher,
  total,
  img,
  book,
}) {
  const { currentUser } = useContext(AuthContext);
  const bookTotal = total
  console.log(bookTotal)
  

  const handleSubmitRequest = async (e) => {
    e.preventDefault();

    const docRef = doc(db, "books", id);
    console.log(docRef)
      try {
        const update = await updateDoc(docRef, {
          book_total: total-1,
        })
        const sendRequest = await addDoc(collection(db, "history"), {
          user_id: currentUser.uid,
          book_id: id,
          book_title: title,          
          status_peminjaman: false,
          approved: "waiting",
          timeStamp: moment().format('YYYY-MM-DD'),
        });
        if (!sendRequest) {
          return Swal.fire("", "Invalid Request!", "error");
        }
        return Swal.fire("", "Buku Berhasil di Request!", "success");
      } catch (err) {
        console.log(err.message)
      }
  };

  return (
    <div className="col-lg-3 m-2">
      <div
        className="project-img-container row"
        data-toggle="modal"
        data-target={`#${id}`}
      >
        <img
          className="img-fluid book-detail mx-auto"
          src={img}
          alt="project-img"
          style={{ width: "140px", height: "140px" }}
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
        <div className="modal-dialog modal-dialog-centered" role="document">
          <form onSubmit={handleSubmitRequest}>
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
                    <p className="project-cat">
                      Available: {total}{" "}
                    </p>
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
                {currentUser && bookTotal>=1 ? (
                  <button type="submit" className="btn btn-primary">
                    Request
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* End of Modal */}
    </div>
  );
}

export default Modal;
