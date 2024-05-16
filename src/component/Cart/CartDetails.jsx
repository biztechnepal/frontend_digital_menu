import React, { useMemo } from 'react';
import useAddToCart from '../../hook/useAddToCart';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import { BsCartCheckFill } from 'react-icons/bs';
function CartDetails() {
  const {
    products,
    setProducts,
    increaseItem,
    decreaseItem,
    addToCart,
    removeItem,
    getTotalPrice,
    sendMenuOrder,
  } = useAddToCart();
  // const { sendMenuOrder } = useOrder()
  const CartItem = ({
    item,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  }) => {
    return (
      <div className='cart-item'>
        <div className='food-card_order-count'>
          <Box>
            <Typography mb={1}>{item.menuItemName}</Typography>
          </Box>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <button
                className='btn btn-outline-secondary minus-btn'
                type='button'
                id='button-addon1'
                onClick={() => decreaseQuantity(item.id)}
              >
                <AiOutlineMinus />
              </button>
            </div>
            <input
              maxLength={4}
              value={item.quantity}
              type='text'
              className='forma-control input-manulator text-center'
              aria-describedby='button-addon1'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary add-btn'
                onClick={() => increaseQuantity(item.id)}
                type='button'
                id='button-addon1'
              >
                <AiOutlinePlus />
              </button>
            </div>
            <div className='input-group-append'>
              <button
                className='btn btn-outline-danger add-btn'
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Cart = useMemo(
    () =>
      ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {
        return (
          <div className='cart'>
            <Box display='flex' mt={3} justifyContent='flex-start'>
              <BsCartCheckFill size={25} />
              <Typography m={2} variant='h5'>
                Cart Details
              </Typography>
            </Box>
            <Divider />
            <Box mt={2}>
              {cartItems?.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeItem={removeItem}
                />
              ))}
            </Box>
          </div>
        );
      },
    []
  );

  return (
    <>
      <div className='container'>
        <Cart
          cartItems={products}
          increaseQuantity={increaseItem}
          decreaseQuantity={decreaseItem}
          removeItem={removeItem}
        />
        <Box mt={4}>
          <Button variant='outlined' onClick={() => sendMenuOrder()}>
            Place Order
          </Button>
        </Box>
      </div>
    </>
  );
}

export default CartDetails;
