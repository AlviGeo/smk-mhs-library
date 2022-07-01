import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

// Material UI Attribute
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

// Import Firebase
import {db} from "../../firebase-config";
import { collection, query, where, doc, getDoc, documentId, updateDoc } from "firebase/firestore";
import { getStorage, ref, updateMetadata } from "firebase/storage";

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
    marginBottom: "5px"
};

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function ModalEditBook({bookTitle, bookAuthor, bookDescription, bookCategory, bookStatus, id, key, bookDetails, bookTotal, bookPublisher, bookImage}) {

  const [title, setTitle] = useState(bookTitle);
  const [author, setAuthor] = useState(bookAuthor);
  const [publisher, setPublisher] = useState(bookPublisher);
  const [description, setDescription] = useState(bookDescription);
  const [total, setTotal] = useState(bookTotal);
  const [category, setCategory] = useState(bookCategory);
  const [image, setImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(0);

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    const bookEditRef = doc(db, "books", id)
    try {
      await updateDoc(bookEditRef, {
        book_author: author,
        book_description: description,
        book_title: title,
        book_publisher: publisher,
        book_total: total,
        category: category,
      })
      Swal.fire(
        '',
        'Buku Berhasil di Update!',
        'success'
      )
      handleBack()
    } catch (err) {
      console.log(err.message);
      Swal.fire(
        '',
        'Buku Gagal di Update!',
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
        <Box sx={{ ...style, width: 550, height: 450, marginTop: "5px" }}>
          <h2 id="child-modal-title">Edit Book Information</h2>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <p className="itemKey">Judul Buku</p>
                <TextField
                name="title"
                defaultValue={bookTitle}
                size="small"
                onChange={(e) => setTitle(e.target.value)}
                // inputProps={{min: 0, style: { textAlign: 'center' }}}
                /><br />
            </Grid>
            <Grid item xs={8}>
            <p className="itemKey">Author</p>
                    <TextField
                    name="author"
                    defaultValue={bookAuthor}
                    size="small"
                    onChange={(e) => setAuthor(e.target.value)}
                    // inputProps={{min: 0, style: { textAlign: 'center' }}}
                    /><br />
            </Grid>
            <Grid item xs={8}><p className="itemKey">Publisher</p>
                    <TextField
                    onChange={(e) => setPublisher(e.target.value)}
                    name="publisher"
                    defaultValue={bookPublisher}
                    size="small"
                    />
            </Grid>
            <Grid item xs={8}>
            <p className="itemKey">Jumlah Buku</p>
                    <TextField
                    onChange={(e) => setTotal(e.target.value)}
                    name="total"
                    defaultValue={total}
                    size="small"
                    />
            </Grid>
            <Grid item xs={8}>
            <p className="itemKey">Category</p>
                    <TextField
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    defaultValue={bookCategory}
                    size="small"
                    />
            </Grid>
            <Grid item xs={8}><p className="itemKey">Description</p>
                    <TextField
                    multiline
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    defaultValue={bookDescription}
                    size="small"
                    />
            </Grid>
            <Grid item xs={8}><p className="itemKey">Foto</p>
                    <TextField
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    name="description"
                    size="small"
                    />
            </Grid>
          </Grid>
          <br />
          <div className="button">
          <Button size="small" color="info" onClick={handleClose} variant="contained" className="button-cancel">Cancel</Button>
          <Button mt={3} type="submit" size="small" color="success"  variant="contained" className="ml-4 button-update">Update</Button>
          </div>
        </Box>
        </form>
      </Modal>
      </ThemeProvider>
    </div>
  )
}

export default ModalEditBook