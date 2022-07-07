import { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { historyColumns } from "../../datatablesource";
import Swal from 'sweetalert2';

import { collection, deleteDoc, doc, updateDoc, onSnapshot, query, where, getDoc } from "firebase/firestore";
import {db} from "../../firebase-config"

const DatatableHistory = () => {
  const [data, setData] = useState([]);
  const [book, setBooks] = useState();
  
  useEffect(() => {
    const fetchHistory = async () => {
      let list = [];
      try {
        const historyRef = collection(db, "history");
        const querySnapshot = query(historyRef, where("approved", "in", ["approved", "rejected"]))
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


  return (
    <div className="datatable">
      <div className="datatableTitle">
        Riwayat Buku
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={historyColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default DatatableHistory;
