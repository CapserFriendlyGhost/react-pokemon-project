import React from "react";
import { Box, Typography, Modal } from "@mui/material/";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffef",
  border: "1px solid lightgray",
  boxShadow: 24,
  p: 4,
};

const PokemonModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="primary"
          >
            Text in a modal
          </Typography>
          <Typography
            id="modal-modal-description"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default PokemonModal;
