import { Dialog, DialogContent, DialogProps, DialogTitle } from "@mui/material";
import React from "react";

const Modal: React.FC<DialogProps> = ({ children, ...args }) => {
  return (
    <Dialog
      open={args.open}
      onClose={args.onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{args.title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
