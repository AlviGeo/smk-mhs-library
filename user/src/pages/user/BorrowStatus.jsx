import React, { useState, useEffect, forwardRef } from "react";
import { Button, Modal } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { useParams, Outlet } from "react-router-dom";

// Alert
import Swal from "sweetalert2";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-config";

// Import Layouts
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const BorrowStatus = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "history"),
        where("user_id", "==", id),
        where("status_peminjaman", "in", ["menunggu approval", "sedang dipinjam"])
      );

      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    };
    fetchData();
  }, [id]);

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
      selector: (row) => row.status_peminjaman,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   button: true,
    //   cell: () => (
    //     <div>
    //       <Button variant="primary btn-sm" onClick={handleShow}>
    //         Kembalikan
    //       </Button>
    //       <Modal
    //         show={show}
    //         aria-labelledby="contained-modal-title-vcenter"
    //         centered
    //       >
    //         <Modal.Header>
    //           <Modal.Title>Konfirmasi Retur Buku</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>Apakah sudah yakin untuk dikembalikan?</Modal.Body>
    //         <Modal.Footer>
    //           <Button variant="secondary" onClick={handleClose}>
    //             Cancel
    //           </Button>
    //           <Button variant="primary" onClick={handleReturn}>
    //             Yes
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>
    //     </div>
    //   ),
    // },
  ];

  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
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
    const previousDisabled = currentPage === 1;

    return (
      <nav>
        <ul className="pagination mt-4">
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleBackButtonClick}
              disabled={previousDisabled}
              aria-disabled={previousDisabled}
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

  const BootyCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
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
      <div className="container  mt-5 mb-5 d-flex justify-content-center align-items-center" style={{padding: "25px"}}>
        <div className="card" style={{ width:"400px" }}>
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
            style={{ height: "500px"}}
          />
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default BorrowStatus;
