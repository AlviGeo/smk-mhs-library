import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./newBook.scss";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// Date Formating
import moment from "moment";

// Import Firebase
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  getDocs
} from "firebase/firestore";
import { db, storage } from "../../firebase-config"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  
  // const [dropdown, setDropdown] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
          list.push({id: doc.id, ...doc.data()});
        });
        setCategory(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData()

    const uploadFile = () => {
      const name = new Date().getTime() + "_" + file.name;

      const storageRef = ref(storage, `images/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      <h1>
      </h1>

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const handleDropdownCategory = (event) => {
    console.log(event.target.value)
    setSelectedCategory(event.target.value);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "books"), {
        ...data, category: selectedCategory,
        timeStamp: moment().format('YYYY-MM-DD'),
      });
      navigate(-1)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="newBooks">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "text" || input.type == "number" ? <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    required
                  /> :  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small" >Select...</InputLabel>
                  <Select
                    type={input.type}
                    value={selectedCategory}
                    placeholder={input.placeholder}
                    onChange={handleDropdownCategory}
                    required
                    styles={{paddingRight: "100px"}}
                  >
                    <MenuItem value="" disabled>
                      <em>None</em>
                    </MenuItem>
                    

                    {category && category.map((cat) => {
                      return (
                      <MenuItem key={cat.id} value={cat.category_name}>
                        {cat.category_name}
                        </MenuItem>
                      )
                    })}
  
                    {/* <MenuItem value={"Teknologi"}>Teknologi</MenuItem>
                    <MenuItem value={"Agama"}>Agama</MenuItem>
                    <MenuItem value={"Keuangan"}>Keuangan</MenuItem>
                    <MenuItem value={"Lainnya"}>Lainnya</MenuItem> */}
                  </Select>
                </FormControl>} 
                
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

export default New;