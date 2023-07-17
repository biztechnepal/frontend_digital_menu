import { styled } from '@mui/material/styles';
import * as React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { PATH_DASHBOARD } from '../../routes/path';
import CategoryHeader from '../Header/CategoryHeader';
import useAddToCart from '../../hook/useAddToCart';
import CartDrawer from '../Popup/CartDrawer';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function MenuListView({
  theme,
  hasPOS,
  menuItem,
  isGridView,
  style,
}) {
  const {
    getItemQuantity,
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const { menuGroupItems, id, name } = menuItem;
  const [open, setOpen] = React.useState(false);

  const { products, addToCart } = useAddToCart();
  const menuCartItem = (item) => {
    return {
      id: item.id,
      menuItemName: item.menuItemName,
      code: item.code,
      price: item.price,
    };
  };
  const linkTo = PATH_DASHBOARD.root;
  const imagearr = [
    '/assets/burgerbg.jpg',
    '/assets/burgerbg1.png',
    '/assets/pizza.jpg',
  ];

  return (
    <>
      <div className='container'>
        <div className='list'>
          <section className='categorySection sectionSpace '>
            <CategoryHeader title={name} style={style} />
            <div class='MenuList listView '>
              <div class='list-wrapper container'>
                <br />
                <div class='row'>
                  {menuGroupItems?.length > 0 &&
                    menuGroupItems?.map((item, index) => (
                      <React.Fragment key={index}>
                        <div class='col-lg-6 col-sm-12'>
                          <div class='food-card_content'>
                            <div class='food-card_title-section'>
                              <a
                                href='#!'
                                style={style}
                                class='food-card_title'
                              >
                                {item?.menuItemName}
                              </a>
                            </div>
                            <div class='food-card_bottom-section'>
                              <div class='space-between'>
                                <div>
                                  <span
                                    class='fa fa-fire'
                                    style={{
                                      ...style,
                                      fontSize: `${theme.size.description}px`,
                                    }}
                                  >
                                    {item?.description}
                                  </span>
                                </div>
                              </div>

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
                                {hasPOS && (
                                  <div className='input-group w-60 mb-3'>
                                    {getItemQuantity(item.id) === 0 ? (
                                      <button
                                        className='btn btn-outline-info add-btn'
                                        type='button'
                                        id='button-addon1'
                                        onClick={() =>
                                          increaseCartQuantity(item, item.id)
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
                              <hr />
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
        {open && products.length > 0 && (
          <CartDrawer open={open} setOpen={setOpen} />
        )}
      </div>
    </>
  );
}
