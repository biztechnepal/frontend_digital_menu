import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { PATH_DASHBOARD } from '../../routes/path';
import { ENDPOINTS } from '../../utlis/endpoints';
import CategoryHeader from '../Header/CategoryHeader';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import useAddToCart from '../../hook/useAddToCart';
import CartDrawer from '../Popup/CartDrawer';

MediaCard.propTypes = {
  menuItem: PropTypes.array,
};

export default function MediaCard({ menuItem, isGridView, style }) {
  // const { menuItemName, price, description, status, menuItemId, imagePath } = menuItem;
  const { menuGroupItems, id, name } = menuItem;
  const [open, setOpen] = useState(false)

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

  // useEffect(async ()=>{
  //   const image =await getMenuItemImage(id)
  //   console.log('IMAGE URL',image)
  //   setImage(URL.createObjectURL(image));
  // },[])

  function generateRandom(maxLimit = imagearr.length) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand); // 99
    return rand;
  }
  return (
    <>

      {isGridView &&
        <div className="container">
          <div class="bgWrapper">
            <section className="categorySection sectionSpace ">
              <div className="container">
                <CategoryHeader title={name} style={style} />
                <div className="MenuList gridview">
                  <br />
                  <div className="row">
                    {
                      menuGroupItems?.length > 0 && menuGroupItems?.map((item, index) =>
                        <React.Fragment key={index}>
                          <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                              <div className="food-card_img">
                                <img
                                  src={`${import.meta.env.VITE_APP_HOST_API_KEY}/${ENDPOINTS.MENUITEMDOWNLOADIMAGE}/${item?.menuItemId}`}
                                  alt="" />
                              </div>
                              <div className="food-card_content">
                                <div className="food-card_title-section">
                                  <a href="#!" style={style} className="food-card_title">{item?.menuItemName}</a>
                                </div>
                                <div className="food-card_bottom-section">
                                  <div className="space-between">
                                    <div>
                                      <span className="fa fa-fire"></span>
                                      {item?.description}
                                      {/* <Typography variant='caption'>{item?.description}</Typography> */}
                                    </div>
                                    {/* <div className="pull-right">
                                <span className="badge badge-success">TEA</span>
                              </div> */}
                                  </div>
                                  <hr />

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
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>)
                    }

                  </div>
                </div>
              </div>
            </section>
          </div>
          {open && products.length > 0 && <CartDrawer open={open} setOpen={setOpen} />}
        </div>
      }

    </>
  );
}
