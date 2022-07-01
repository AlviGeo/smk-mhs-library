import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { categoryColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import {db} from "../../firebase-config"

const DatatableCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    const unsub = onSnapshot(collection(db, "category"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => {
        list.push({id:doc.id, ...doc.data()});
      })
      // console.log(list)
      setData(list)
    }, (error) => {
      console.log(error);
    })
    return () => {
      unsub();
    }
  }, []);

  // const findId = data.find(book => book.id === "fn7Xp1TKu2VZfs0dtXWP")
  // console.log(findId)


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "category", id));
      Swal.fire(
        '',
        'Category Buku Berhasil Dihapus!',
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
        Category List
        <Link to="/category/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DatatableCategory;
