import React, { useMemo } from 'react';
import useAddToCart from '../../hook/useAddToCart';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { BsCartCheckFill } from 'react-icons/bs';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
function MenuCartDetails({ menuItem, code, id, menuItemName }) {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    placeOrderAPI,
  } = useShoppingCart();
  return (
    <>
      <div className='food-card_order-count'>
        <Box mt={2} display='flex' justifyContent='space-between'>
          <Typography fontSize={12} mb={1}>
            {menuItemName} ({code})
          </Typography>
        </Box>
        <div className='input-group mb-3'>
          <div className='input-group-prepend'>
            <button
              className='btn btn-outline-secondary minus-btn'
              type='button'
              id='button-addon1'
              onClick={() => decreaseCartQuantity(menuItem, id)}
            >
              <AiOutlineMinus />
            </button>
          </div>
          <input
            maxLength={4}
            value={cartItems?.find((item) => item?.id === id)?.quantity || 0}
            type='text'
            className='forma-control input-manulator text-center'
            aria-describedby='button-addon1'
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary add-btn'
              onClick={() => increaseCartQuantity(menuItem, id)}
              type='button'
              id='button-addon1'
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className='input-group-append'>
            <button
              className='btn btn-outline-danger add-btn'
              onClick={() => removeFromCart(id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(MenuCartDetails);
