import { styled } from '@mui/material/styles';
import * as React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { PATH_DASHBOARD } from '../../routes/path';
import CategoryHeader from '../Header/CategoryHeader';
import useAddToCart from '../../hook/useAddToCart';
import CartDrawer from '../Popup/CartDrawer';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function MenuListView({ menuItem, isGridView, style }) {
  // const { menuItemName, price, description, status, menuItemId, imagePath } = menuItem;
  const { menuGroupItems, id, name } = menuItem;
  const [open, setOpen] = React.useState(false)
  
  const { products, addToCart } = useAddToCart()
  const menuCartItem = (item) => {
      return {
          id: item.id,
          menuItemName: item.menuItemName,
          code: item.code,
          price: item.price,
      }
  }
  const linkTo = PATH_DASHBOARD.root;
  const imagearr = [
    "/assets/burgerbg.jpg",
    "/assets/burgerbg1.png",
    "/assets/pizza.jpg",
  ]

  return (
    <>
      <div className='container'>
        <div className='list' >
          <section className="categorySection sectionSpace ">
            <CategoryHeader title={name} style={style} />
            <div class="MenuList listView ">
              <div class="list-wrapper container">
                <br />
                <div class="row">
                  {
                    menuGroupItems?.length > 0 && menuGroupItems?.map((item, index) =>
                      <React.Fragment key={index}>
                        <div class="col-lg-6 col-sm-12">
                          <div class="food-card_content">
                            <div class="food-card_title-section">
                              <a href="#!" style={style} class="food-card_title">{item?.menuItemName}</a>
                            </div>
                            <div class="food-card_bottom-section">
                              <div class="space-between">
                                <div>
                                  <span class="fa fa-fire"></span>{item?.description}
                                </div>
                                {/* <div class="pull-right">
                              <span class="badge badge-success">TEA</span>
                            </div> */}
                              </div>

                              <div className="space-between">
                                <div className="food-card_price" style={style}>
                                  <span>Rs. {item?.price}</span>
                                </div>
                                <div className="m-3">
                                  <button className="btn btn-outline-primary add-btn" type="button" id="button-addon1"
                                    onClick={() => {
                                      setOpen(true)
                                      addToCart(menuCartItem(item))
                                    }}
                                  >
                                    <AiOutlinePlus size={18} />
                                  </button>
                                </div>
                              </div>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                </div>
              </div>
            </div>
          </section>
        </div>
        {open && products.length > 0 && <CartDrawer open={open} setOpen={setOpen} />}
      </div>
    </>
  );
}