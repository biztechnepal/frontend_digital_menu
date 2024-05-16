import PropTypes from 'prop-types';
import React from 'react';
import { ENDPOINTS } from '../../../utlis/endpoints';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function MenuGrid2({ item, style, companyId }) {
  const itemImage = `${import.meta.env.VITE_APP_HOST_API_KEY}/${
    ENDPOINTS.MENUITEMDOWNLOADIMAGE
  }/${item?.menuItemId}`;

  return (
    <React.Fragment key={index}>
      <div className='col-sm-6 col-md-6 col-lg-4'>
        <div className='food-card'>
          <div className='food-card_img'>
            <img
              onError={(e) =>
                (e.currentTarget.src = `${
                  import.meta.env.VITE_APP_HOST_API_KEY
                }/${ENDPOINTS.DOWNLOADCOMPANYLOGO}/${companyId}`)
              }
              src={itemImage}
              alt=''
            />
            <a href='#!'>
              <i className='far fa-heart'></i>
            </a>
          </div>
          <div className='food-card_content'>
            <div className='food-card_title-section'>
              <a href='#!' style={style} className='food-card_title'>
                {item?.menuItemName}
              </a>
            </div>
            <div className='food-card_bottom-section'>
              <div className='space-between'>
                <div
                  className='food-card_price'
                  style={{ ...style, fontWeight: 800 }}
                >
                  <span>Rs. {item?.price}</span>
                </div>
              </div>
              <div className='food-card_order-count'>
                <div className='input-group mb-3'>
                  <div className='input-group-prepend'>
                    <button
                      className='btn btn-outline-secondary minus-btn'
                      type='button'
                      id='button-addon1'
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <input
                    type='text'
                    className='form-control input-manulator'
                    placeholder=''
                    aria-label='Example text with button addon'
                    aria-describedby='button-addon1'
                    //  value="0"
                  />
                  <div className='input-group-append'>
                    <button
                      className='btn btn-outline-secondary add-btn'
                      type='button'
                      id='button-addon1'
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
MenuGrid2.propTypes = {
  menuItem: PropTypes.array,
};

export default MenuGrid2;
