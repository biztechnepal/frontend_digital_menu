import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsCart4, BsCartPlusFill, BsGrid, BsList } from 'react-icons/bs';
import useAddToCart from '../hook/useAddToCart';
import { useNavigate } from 'react-router-dom';
import CartDrawer from './Popup/CartDrawer';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function ViewMode({ hasPOS, style, isGridView, setIsGridView }) {
  //   const { products, itemCount } = useAddToCart();
  const { openCart, cartTotalItem } = useShoppingCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='viewModeIcos'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 d-flex'>
            {!isGridView ? (
              <IconButton onClick={() => setIsGridView(true)}>
                <BsList color={style?.color} size={22} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsGridView(!isGridView)}>
                <BsGrid color={style?.color} size={22} />
              </IconButton>
            )}
            {hasPOS && (
              <IconButton onClick={openCart}>
                <BsCartPlusFill color={style?.color} size={22} />
                <span style={{ color: style?.color }}>{cartTotalItem}</span>
              </IconButton>
            )}
          </div>
        </div>
        {/* {open && <CartDrawer open={open} setOpen={setOpen} />} */}
      </div>
    </div>
  );
}

export default ViewMode;
