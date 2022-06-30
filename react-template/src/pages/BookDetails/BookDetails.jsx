import React, {useState, useEffect} from "react";
import "./BookDetails.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import profileImg from "./female-icon.png";


import {useParams, Outlet} from "react-router-dom";
import {db} from "../../firebase-config";
import { collection, query, where, getDocs, doc, getDoc, documentId } from "firebase/firestore";
import ModalEditBook from "../../components/ModalEdit/ModalEditBook";


const BookDetails = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState('');
  

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "books", bookId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setBookDetails(docSnap.data());
      } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      }
    }
    fetchData();
  }, [])

  console.log(bookDetails)

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Book Information</h1>
            <div className="item">
              <img
                src={bookDetails.img}
                alt="Foto Siswa"
                className="itemImg mr-3"
              />
              <div className="details mb-3">
                <h1 className="itemTitle">{bookDetails.book_title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Author</span>
                  <span className="itemValue">{bookDetails.book_author}</span>
                </div>  
                <div className="detailItem">
                  <span className="itemKey">Publisher</span>
                  <span className="itemValue">{bookDetails.book_publisher}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description</span>
                  <span className="itemValue">{bookDetails.book_description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category</span>
                  <span className="itemValue">{bookDetails.book_category}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Book Status</span>
                  <span className="itemValue">{bookDetails.book_status}</span>
                </div>
            <div className="right button-edit">
            <ModalEditBook />
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

export default BookDetails;
