import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { bookColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase-config"

const DatatableBooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "books"), (snapShot) => {
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "books", id));
      Swal.fire(
        '',
        'Buku Berhasil Dihapus!',
        'success'
      )
    } catch (err) {
      console.log(err);
    }
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/books/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
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
        columns={bookColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DatatableBooks;
