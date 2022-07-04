import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Layouts
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./newCategories.scss";

// Import Firebase
import {
  addDoc,
  collection
} from "firebase/firestore";
import { db } from "../../firebase-config"


const NewCategories = ({ inputs, title }) => {
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "category"), {
        ...data,
      });
      Swal.fire(
        '',
        'Kategori Buku Berhasil Ditambah!',
        'success'
      )
      navigate(-1)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right" >
            <form classname="user-form" onSubmit={handleAdd} styles={{flexDirection: "column",
          alignContent: "center"}}>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label className="mt-3">{input.label}</label>
                  <TextField
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    required
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Tambah
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategories;