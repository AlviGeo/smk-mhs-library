import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Material UI Attribute
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Import Firebase
import { collection, query, where, doc, getDoc, documentId, updateDoc } from "firebase/firestore";
import {db} from "../../firebase-config";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
};

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function ModalEditUser({currentEmail, currentUsername, id}) {
  
  const [email, setEmail] = useState(currentEmail);
  const [username, setUsername] = useState(currentUsername);

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    setOpen(false);
    navigate(-1)
  }

  const handleUpdate = async(e) => {
    e.preventDefault();
    const userEditRef = doc(db, "users", id)
    try {
      await updateDoc(userEditRef, {
        username: username,
        email: email,
      })
      Swal.fire(
        '',
        'User Berhasil di Update!',
        'success'
      )
      handleBack()
    } catch (err) {
      console.log(err.message);
      Swal.fire(
        '',
        'User Gagal di Update!',
        'error'
      )
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button color="neutral" onClick={handleBack}  variant="contained">Back</Button>
        <Button onClick={handleOpen} variant="contained">Edit</Button>
        <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <form onSubmit={handleUpdate}>
        <Box sx={{ ...style, width: 500, height: 300, marginTop: "5px" }}>
          <h2 id="child-modal-title">Edit Informasi Siswa</h2><br /><br />
          <h4 className="itemKey mb-3">Email</h4>
          <TextField
                name="email"
                defaultValue={currentEmail}
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                margin="dense"
                />
                <h4 className="itemKey mb-3" >Username</h4>
          <TextField
                name="username"
                defaultValue={currentUsername}
                size="small"
                onChange={(e) => setUsername(e.target.value)}
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                margin="dense"
                />
          <div className="button">
            <br /><br />
          <Button size="small" color="info" onClick={handleClose} variant="contained" className="button-cancel">Cancel</Button>
          <Button type="submit" size="small" color="success" variant="contained" className="ml-4 button-update">Update</Button>
          </div>
        </Box>
        </form>
      </Modal>
      </ThemeProvider>
    </div>
  )
}

export default ModalEditUser;