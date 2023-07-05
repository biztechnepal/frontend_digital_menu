import React from 'react';
import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
  Zoom,
} from '@mui/material';
import CartDetails from '../Cart/CartDetails';
import { GrClose } from 'react-icons/gr';

function CartDrawer({ open, setOpen, onClose }) {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(false);
  };

  return (
    <Drawer
      variant='temporary'
      anchor='right'
      onClose={toggleDrawer('right', false)}
      open={open}
    >
      <Box m={1} display='flex' justifyContent='flex-end'>
        <IconButton onClick={() => setOpen(false)} color='error'>
          <GrClose />
        </IconButton>
      </Box>
      <CartDetails />
    </Drawer>
  );
}

export default CartDrawer;
