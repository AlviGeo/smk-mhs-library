import React, { useState, useEffect } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import movies from "./movies";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useParams, Outlet } from "react-router-dom";
// Alert
import Swal from "sweetalert2";


import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import Layouts
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const BorrowStatus = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "history"), where("user_id", "==", id), where("status_peminjaman", "==", true), where("approved", "in", ["waiting", "rejected", "approved"]));

      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        list.push({id:doc.id, ...doc.data()});
      });
      setData(list)
    };
    fetchData();
  }, []);

  // console.log(data[0].id)

  const handleReturn = async(e) => {

    const docRef = doc(db, "history", data[0].id);
    try {
      const update = await updateDoc(docRef, {
        status_peminjaman: false,

      })
      return Swal.fire("", "Buku Berhasil di Kembalikan!", "success");
    } catch (err) {
      console.log(err.message)
    }
  }

  // console.log(data);

  // <Button variant="info" onClick={handleShow}>
  //   Detail
  // </Button>;

  function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
  }

  function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
      results.push(i);
    }

    return results;
  }

  const columns = [
    {
      name: "Title",
      selector: (row) => row.book_title,
      sortable: true,
    },
    // {
    //   name: "Tanggal Pinjam",
    //   selector: (row) => row.created.toString(),
    //   sortable: true,
    // },
    {
      name: "Status Pinjam",
      selector: (row) => row.status_peminjaman.toString(),
      sortable: true,
    },
    {
      name: "Action",
      button: true,
      cell: () => (
        // <div className="openbtn text-center">
        //   <button
        //     type="button"
        //     className="btn btn-info btn-sm"
        //     data-bs-toggle="modal"
        //     data-bs-target="#myModal"
        //   >
        //     Kembalikan
        //   </button>
        //   <div className="modal" tabindex="-1" id="myModal">
        //     <div className="modal-dialog modal-dialog-centered">
        //       <div className="modal-content">
        //         <div className="modal-header">
        //           <h5 className="modal-title">Pengembalian Buku</h5>
        //           <button
        //             type="button"
        //             className="btn-close"
        //             data-bs-dismiss="modal"
        //             aria-label="Close"
        //           ></button>
        //         </div>
        //         <div className="modal-body">
        //           <p>Apakah sudah yakin untuk di retur?</p>
        //         </div>
        //         <div className="modal-footer">
        //           <button
        //             type="button"
        //             className="btn btn-secondary"
        //             data-bs-dismiss="modal"
        //           >
        //             Tutup
        //           </button>
        //           <button type="button" className="btn btn-primary  ">
        //             Iya
        //           </button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div>
          <Button variant="primary btn-sm" onClick={handleShow}>
        Kembalikan
      </Button>
      <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title>Konfirmasi Retur Buku</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah sudah yakin untuk dikembalikan?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleReturn}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      ),
    },
  ];

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage,
  }) => {
    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previosDisabled}
              aria-disabled={previosDisabled}
              aria-label="previous page"
            >
              Previous
            </button>
          </li>
          {pageItems.map((page) => {
            const className =
              page === currentPage ? "page-item active" : "page-item";

            return (
              <li key={page} className={className}>
                <button
                  className="page-link"
                  onClick={handlePageNumber}
                  value={page}
                >
                  {page}
                </button>
              </li>
            );
          })}
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleNextButtonClick}
              disabled={nextDisabled}
              aria-disabled={nextDisabled}
              aria-label="next page"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div className="container  mt-5 mb-5 d-flex justify-content-center align-items-center">
        <div className="card">
          <DataTable
            title="Riwayat Peminjaman"
            columns={columns}
            data={data}
            defaultSortFieldID={1}
            pagination
            paginationComponent={BootyPagination}
            selectableRows
            selectableRowsComponent={BootyCheckbox}
            highlightOnHover
            style={{height: "200px"}}
          />
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default BorrowStatus;
