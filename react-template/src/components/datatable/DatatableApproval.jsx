import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { historyColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import { collection, getDocs, deleteDoc, doc, updateDoc, onSnapshot, query, where } from "firebase/firestore";
import {db} from "../../firebase-config"

const DatatableApproval = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    const fetchHistory = async () => {
      let list = [];
      try {
        const historyRef = collection(db, "history");
        const querySnapshot = query(historyRef, where("approved", "==", "waiting"))
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

  const handleUpdate = async (id) => {

    const historyRef = doc(db, "history", id)
    // const booksRef = doc(db, )
    try {
      await updateDoc(historyRef, {
        approved: "approved",
        book_status: "Unavailable",
        status_peminjaman: true
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
              <div className="viewButton" onClick={() => handleUpdate(params.row.id)}>Approve</div>
            <div
              className="deleteButton"
              onClick={() => handleReject(params.row.id)}
            >
              Reject
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        List Riwayat
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

export default DatatableApproval;
