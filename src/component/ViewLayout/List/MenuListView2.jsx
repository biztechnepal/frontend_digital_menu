import * as React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function MenuListView2({ index, item, style }) {
  return (
    <React.Fragment key={index}>
      <div className='col-lg-6'>
        <ul
          className='list-group catlistgroup'
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <li className='list-group-item'>
            <h4 style={style} className='list-group-item-heading'>
              {item?.menuItemName}
              <span
                className='badge pull-right Commonprice'
                style={{ ...style, fontWeight: 800 }}
              >
                Rs. {item?.price}
              </span>
            </h4>
            <p className='list-group-item-text'>{item?.description}</p>
          </li>
        </ul>

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
    </React.Fragment>
  );
}

export default MenuListView2;
