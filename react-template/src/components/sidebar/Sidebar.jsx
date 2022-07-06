import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CategoryIcon from '@mui/icons-material/Category';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import {AuthContext} from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import {auth} from "../../firebase-config";
import {signOut} from "firebase/auth";

import Swal from 'sweetalert2';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {dispatch: authDispatch} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleLogout = async () => {
      signOut(auth).then(() => {
        authDispatch({type: "LOGOUT", payload: window.localStorage.removeItem("user")})
        navigate("/login")
        Swal.fire(
          '',
          'Logout Success!',
          'success'
        )
      }).catch((error) => {
        Swal.fire(
          '',
          'Failed Logout!',
          'error'
        )
      });
    }
    
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">MHS ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Siswa</span>
            </li>
          </Link>
          <Link to="/books" style={{ textDecoration: "none" }}>
            <li>
              <LibraryBooksIcon className="icon" />
              <span>Buku</span>
            </li>
          </Link>
          <Link to="/category" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Category</span>
            </li>
          </Link>

          <p className="title">MANAGE</p>
          <Link to ="/approval" style={{ textDecoration: "none" }}>
          <li>
            <LibraryAddCheckIcon className="icon" />
            <span>Approval Buku</span>
          </li>
          </Link>

          <Link to ="/returnbooks" style={{ textDecoration: "none" }}>
          <li>
            <SystemUpdateAltIcon className="icon" />
            <span>Pengembalian Buku</span>
          </li>
          </Link>

          <Link to ="/history" style={{ textDecoration: "none" }}>
          <li>
            <ListAltIcon className="icon" />
            <span>Riwayat Peminjaman Buku</span>
          </li>
          </Link>

          <p className="title">ACCOUNT</p>
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={() => handleLogout()}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
