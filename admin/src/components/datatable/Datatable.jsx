import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import {auth} from "../../firebase-config";
import {db} from "../../firebase-config"

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
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
      const user = auth.currentUser;
      console.log(data.email)
      // await deleteDoc(doc(db, "users", id));
      // Swal.fire(
      //   '',
      //   'Data Berhasil di Hapus!',
      //   'success'
      // )
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
            <Link key={params.id} to={`/users/${params.id}`} style={{ textDecoration: "none" }}>
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
        User List
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
        pagination
      />
    </div>
  );
};

export default Datatable;
