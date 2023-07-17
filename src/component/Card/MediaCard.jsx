import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PATH_DASHBOARD } from '../../routes/path';
import { ENDPOINTS } from '../../utlis/endpoints';
import CategoryHeader from '../Header/CategoryHeader';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import useAddToCart from '../../hook/useAddToCart';
import CartDrawer from '../Popup/CartDrawer';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

MediaCard.propTypes = {
  menuItem: PropTypes.array,
};

export default function MediaCard({
  theme,
  companyId,
  hasPOS,
  menuItem,
  isGridView,
  style,
}) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  // const quantity = getItemQuantity(menuItem.id);
  //  const itemImage = `${import.meta.env.VITE_APP_HOST_API_KEY}/${
  //   ENDPOINTS.MENUITEMDOWNLOADIMAGE
  // }/${item?.menuItemId}`;
  const { menuGroupItems, id, name } = menuItem;

  return (
    <>
      {isGridView && (
        <div className='container'>
          <div class='bgWrapper'>
            <section className='categorySection sectionSpace '>
              <div className='container'>
                <CategoryHeader title={name} style={style} />
                <div className='MenuList gridview'>
                  <br />
                  <div className='row'>
                    {menuGroupItems?.length > 0 &&
                      menuGroupItems?.map((item, index) => (
                        <React.Fragment key={index}>
                          <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='food-card food-card--vertical'>
                              <div className='food-card_img'>
                                <img
                                  onError={(e) =>
                                    (e.currentTarget.src = `${
                                      import.meta.env.VITE_APP_HOST_API_KEY
                                    }/${
                                      ENDPOINTS.DOWNLOADCOMPANYLOGO
                                    }/${companyId}`)
                                  }
                                  src={`${
                                    import.meta.env.VITE_APP_HOST_API_KEY
                                  }/${ENDPOINTS.MENUITEMDOWNLOADIMAGE}/${
                                    item?.menuItemId
                                  }`}
                                  alt=''
                                />
                              </div>
                              <div className='food-card_content'>
                                <div className='food-card_title-section'>
                                  <a
                                    href='#!'
                                    style={style}
                                    className='food-card_title'
                                  >
                                    {item?.menuItemName}
                                  </a>
                                </div>
                                <div className='food-card_bottom-section'>
                                  <div className='space-between'>
                                    <div>
                                      <span
                                        className='fa fa-fire'
                                        style={{
                                          ...style,
                                          fontSize: `${theme.size.description}px`,
                                        }}
                                      >
                                        {item?.description}
                                      </span>
                                    </div>
                                  </div>
                                  <hr />

                                  <div className='space-between'>
                                    <div
                                      className='food-card_price'
                                      style={{
                                        ...style,
                                        fontSize: `${theme.size.caption}px`,
                                      }}
                                    >
                                      <span>Rs. {item?.price}</span>
                                    </div>
                                  </div>
                                  <div className='space-between'>
                                    {hasPOS && (
                                      <div className='input-group w-60 mb-3'>
                                        {getItemQuantity(item.id) === 0 ? (
                                          <button
                                            className='btn btn-outline-info add-btn'
                                            type='button'
                                            id='button-addon1'
                                            onClick={() =>
                                              increaseCartQuantity(
                                                item,
                                                item.id
                                              )
                                            }
                                          >
                                            <AiOutlinePlus size={18} />
                                            Add To Cart
                                          </button>
                                        ) : (
                                          <React.Fragment>
                                            <div className='input-group-prepend'>
                                              <button
                                                className='btn btn-outline-secondary minus-btn'
                                                type='button'
                                                id='button-addon1'
                                                onClick={() =>
                                                  decreaseCartQuantity(
                                                    item,
                                                    item.id
                                                  )
                                                }
                                              >
                                                <AiOutlineMinus />
                                              </button>
                                            </div>
                                            <input
                                              type='text'
                                              className='form-control input-manulator text-center'
                                              value={getItemQuantity(item.id)}
                                              aria-label='Example text with button addon'
                                              aria-describedby='button-addon1'
                                            />
                                            <div className='input-group-append'>
                                              <button
                                                className='btn btn-outline-secondary add-btn'
                                                type='button'
                                                id='button-addon1'
                                                onClick={() =>
                                                  increaseCartQuantity(
                                                    item,
                                                    item.id
                                                  )
                                                }
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
                          </div>
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* {open && products.length > 0 && (
            <CartDrawer open={open} setOpen={setOpen} />
          )} */}
        </div>
      )}
    </>
  );
}
