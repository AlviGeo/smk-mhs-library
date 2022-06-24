import React, { useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";

// Import Layouts
import Navbar from "../../layouts/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";

const BorrowStatus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar />
      <div className="container  mt-5 mb-5 d-flex justify-content-center align-items-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul Buku</th>
              <th>Status Peminjaman</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alvi</td>
              <td>Sudah Dikembalikan</td>
              <td>
                <Button variant="info" onClick={handleShow}>
                  Detail
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Users</td>
              <td>Dalam peminjaman</td>
              <td>
                <Button variant="info" onClick={handleShow}>
                  Selesai
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Konfirmasi Retur Buku</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah sudah yakin untuk dikembalikan?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BorrowStatus;
