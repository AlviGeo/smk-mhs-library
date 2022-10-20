import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { historyColumns } from "../../datatablesource";
import Swal from 'sweetalert2';

import { collection, deleteDoc, doc, updateDoc, onSnapshot, query, where, getDoc } from "firebase/firestore";
import {db} from "../../firebase-config"

const DatatableReturnBooks = () => {
  const [data, setData] = useState([]);
  const [book, setBooks] = useState();
  

  useEffect(() => {
    const fetchHistory = async () => {
      let list = [];
      try {
        const historyRef = collection(db, "history");
        const querySnapshot = query(historyRef, where("approved", "==", "approved"), where("status_peminjaman", "==", "sedang dipinjam"))
        const unsub = onSnapshot(querySnapshot, (snapShot) => {
          let list = [];
          snapShot.docs.forEach(doc => {
            list.push({id:doc.id, ...doc.data()});
          })
          setData(list)
        }, (error) => {
          console.log(error);
        })
        return () => {
          unsub();
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchHistory();
    
  }, []);


  const handleReject = async (id) => {
    try {
      await deleteDoc(doc(db, "history", id));
      Swal.fire(
        '',
        'Request Rejected!',
        'success'
      )
    } catch (err) {
      Swal.fire(
        '',
        `${err.message}`,
        'error'
      )
    }
    setData(data.filter((item) => item.id !== id));
  };

  const handleReturnBook = async (id, bookId) => {

    const historyRef = doc(db, "history", id)
    const bookRef = doc(db, "books", bookId)
    const docSnap = await getDoc(bookRef);
    
    try {
      if (docSnap.exists()) {
        setBooks(docSnap.id, docSnap.data())
      } else {
        console.log("No such document!");
        Swal.fire(
          '',
          'Data Not Found!',
          'error'
        )
      }

      await updateDoc(historyRef, {
        approved: "approved",
        status_peminjaman: "sudah dikembalikan"
      })
      await updateDoc(bookRef, {
        book_total: docSnap.data().book_total+1
      })
      Swal.fire(
        '',
        'Book Approved!',
        'success'
      )
    } catch (err) {
      console.log(err);
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleReturnBook(params.row.id, params.row.book_id)}
            >
              Return Book
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Pengembalian Buku
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={historyColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DatatableReturnBooks;
