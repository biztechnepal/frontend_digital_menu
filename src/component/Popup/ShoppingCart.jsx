import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  Zoom,
} from '@mui/material';
import CartDetails from '../Cart/CartDetails';
import { GrClose } from 'react-icons/gr';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import MenuCartDetails from '../Cart/MenuCartDetails';
import { BsCartCheckFill } from 'react-icons/bs';
import Image from '../Image';

function ShoppingCart({ open, setOpen, onClose }) {
  const { closeCart, cartItems, sendMenuOrder } = useShoppingCart();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    closeCart();
  };

  return (
    <Drawer
      variant='temporary'
      anchor='right'
      onClose={toggleDrawer('right', false)}
      open={open}
    >
      <Container>
        <Box m={1} display='flex' justifyContent='flex-end'>
          <IconButton onClick={closeCart} color='error'>
            <GrClose size={18} />
          </IconButton>
        </Box>
        <Box display='flex' mt={2} justifyContent='space-between'>
          <BsCartCheckFill size={18} />
          <Typography m={2} variant='h5'>
            Your Order.
          </Typography>
        </Box>
        <Divider />
        <Box>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {cartItems.map((item) => (
                <MenuCartDetails key={item.id} menuItem={item} {...item} />
              ))}

              <Box mt={4}>
                <Button variant='outlined' onClick={() => sendMenuOrder()}>
                  Place Order
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <Box m={4}>
              <Stack display='flex' alignItems='center'>
                <Typography variant='h4'>Cart is empty.</Typography>
                <Image
                  alt='cover'
                  src='assets/empty1.webp'
                  sx={{ height: 150 }}
                />
              </Stack>
            </Box>
          )}
        </Box>
      </Container>
    </Drawer>
  );
}

export default ShoppingCart;
