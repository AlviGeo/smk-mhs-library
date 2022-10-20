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

// Import Firebase
import {db} from "../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";

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

function ModalEditBook({bookTitle, bookAuthor, bookCategory, bookStatus, id, key, bookDetails, bookTotal, bookPublisher, bookImage, bookPublishedDate, bookCode}) {

  const [title, setTitle] = useState(bookTitle);
  const [author, setAuthor] = useState(bookAuthor);
  const [publisher, setPublisher] = useState(bookPublisher);
  const [bookcode, setBookcode] = useState(bookCode);
  const [publishedDate, setpublishedDate] = useState(bookPublishedDate);
  const [total, setTotal] = useState(bookTotal);
  const [category, setCategory] = useState(bookCategory);

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
        book_title: title,
        book_publisher: publisher,
        book_code: bookcode,
        date_published: publishedDate,
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
                /><br />
            </Grid>
            <Grid item xs={8}>
            <p className="itemKey">Author</p>
                    <TextField
                    name="author"
                    defaultValue={bookAuthor}
                    size="small"
                    onChange={(e) => setAuthor(e.target.value)}
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
            <p className="itemKey">Kode Buku</p>
                    <TextField
                    onChange={(e) => setBookcode(e.target.value)}
                    name="code"
                    defaultValue={bookcode}
                    size="small"
                    />
            </Grid>
            
            <Grid item xs={8}><p className="itemKey">Tahun Publikasi</p>
                    <TextField
                    multiline
                    onChange={(e) => setpublishedDate(e.target.value)}
                    name="date_published"
                    defaultValue={bookPublishedDate}
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