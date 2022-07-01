import React, {useState, useEffect} from "react";
import "./UserDetails.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";
import profileImg from "./female-icon.png";
import Input from '@mui/material/Input';

import {useParams, Outlet} from "react-router-dom";
import {db} from "../../firebase-config";
import { collection, query, where, getDocs, doc, getDoc, documentId } from "firebase/firestore";
import ModalEditUser from "../../components/ModalEdit/ModalEditUser";


const UserDetails = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState('');
  const ariaLabel = { 'aria-label': 'description' };
  

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setUserDetails(docSnap.data());
      } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      }
    }
    fetchData();
  }, [])

  console.log(userDetails)

  return (
    <div className="single-user">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">User Information</h1>
            <div className="item">
              
              <div className="details mb-3">
                <h1 className="itemTitle">{userDetails.username}</h1>
              {/* <Input className="itemTitle" defaultValue={`${userDetails.username}`} inputProps={ariaLabel} /> */}
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userDetails.email}</span>
                </div>
              <div className="right button-edit">
            <ModalEditUser key={userId} id={userId} currentEmail={userDetails.email} currentUsername={userDetails.username} />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserDetails;
