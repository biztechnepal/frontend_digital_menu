import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ENDPOINTS } from '../../../utlis/endpoints';
import { useShoppingCart } from '../../../contexts/ShoppingCartContext';
import { MdAddShoppingCart } from 'react-icons/md';

function MenuGrid({ item, style, addToCart, hasPOS, companyId }) {
  const itemImage = `${import.meta.env.VITE_APP_HOST_API_KEY}/${
    ENDPOINTS.MENUITEMDOWNLOADIMAGE
  }/${item?.menuItemId}`;
  const {
    getItemQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);
  return (
    <>
      <div className='col-sm-6 col-md-6 col-lg-6'>
        <div className='food-card food-card--vertical'>
          <div className='food-card_img'>
            <img
              // src={item.imagePath}
              onError={(e) =>
                (e.currentTarget.src = `${
                  import.meta.env.VITE_APP_HOST_API_KEY
                }/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${companyId}`)
              }
              src={itemImage}
              alt=''
            />
          </div>
          <div className='food-card_content'>
            <div className='food-card_title-section'>
              <a href='#!' style={style} className='food-card_title'>
                {item?.menuItemName}
              </a>
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
      </div>
    </>
  );
}

MenuGrid.propTypes = {
  menuItem: PropTypes.array,
};

export default MenuGrid;
