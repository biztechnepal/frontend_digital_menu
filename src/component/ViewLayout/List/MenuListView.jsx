import * as React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import useAddToCart from '../../../hook/useAddToCart';
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';
import { MdAddShoppingCart } from 'react-icons/md';

function MenuListView({ index, item, style, addToCart, hasPOS }) {
  const {
    getItemQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity =
    cartItems?.find((data) => data?.id === item.id)?.quantity || 0;
  return (
    <React.Fragment key={index}>
      <div className='col-lg-6 col-sm-12'>
        <div className='food-card_bottom-section'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className='food-card_title-section'>
              <a href='#' style={style} className='food-card_title'>
                {item?.menuItemName}
              </a>
            </div>
          </div>

          <div className='food-card_bottom-section'>
            <div className='space-between mt-3'>
              <div className='food-card_price' style={style}>
                <span>Rs. {item?.price}</span>
              </div>
            </div>
            <p className='list-group-item-text'>{item?.description}</p>
            <hr />

            {hasPOS && (
              <div className='input-group w-50 mb-3'>
                {quantity === 0 ? (
                  <button
                    className='btn btn-outline-info add-btn'
                    type='button'
                    id='button-addon1'
                    // onClick={addToCart}
                    onClick={() => increaseCartQuantity(item, item.id)}
                  >
                    <MdAddShoppingCart size={25} />
                  </button>
                ) : (
                  <React.Fragment>
                    <div className='input-group-prepend'>
                      <button
                        className='btn btn-outline-secondary minus-btn'
                        type='button'
                        id='button-addon1'
                        onClick={() => decreaseCartQuantity(item, item.id)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                    <input
                      type='text'
                      className='form-control input-manulator'
                      value={quantity}
                      aria-label='Example text with button addon'
                      aria-describedby='button-addon1'
                    />
                    <div className='input-group-append'>
                      <button
                        className='btn btn-outline-secondary add-btn'
                        type='button'
                        id='button-addon1'
                        onClick={() => increaseCartQuantity(item, item.id)}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(MenuListView);
