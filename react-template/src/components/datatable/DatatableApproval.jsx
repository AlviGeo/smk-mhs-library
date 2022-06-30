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
    const unsub = onSnapshot(collection(db, "history"), (snapShot) => {
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
    try {
      await updateDoc(historyRef, {
        approved: true,
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
        Book List
        <Link to="/books/new" className="link">
          Add New
        </Link>
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
