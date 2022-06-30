import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

function ModalEditUser() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button onClick={handleOpen} variant="contained">Edit</Button>
        <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 300 }}>
          <h2 id="child-modal-title">Update User Information</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="button">
          <Button size="small" color="info" onClick={handleClose} variant="contained" className="button-cancel">Cancel</Button>
          <Button size="small" color="success" onClick={handleClose} variant="contained" className="ml-4 button-update">Update</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalEditUser;