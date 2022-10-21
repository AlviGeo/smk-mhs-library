import React, {useState, useEffect, useContext} from "react";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import "./table.scss";

// Material UI 
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import { dashboardColumns } from "../../datatablesource";

// Import Firebase
import { collection, getDocs, onSnapshot, where, query } from "firebase/firestore";
import {db} from "../../firebase-config"


const List = () => {

  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [student, setStudents] = useState([]);
  const getCurrentDate =  moment().format("YYYY-MM-DD")
  const getLastMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const studentRef = await getDocs(collection(db, "users"));
        const querySnapshot = query(studentRef, where("user_id", "===", currentUser.uid))
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()});
        });
        setStudents(list);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData()

    const historyRef = collection(db, "history");
    const q2 = query(historyRef, where("status_peminjaman", "==", "sedang dipinjam"), where("approved", "==", "approved"))
    
    const unsub = onSnapshot(q2, (snapShot) => {
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

  return (
    <Box sx={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={dashboardColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default List;
