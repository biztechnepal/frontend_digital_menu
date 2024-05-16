import React, { useState } from 'react';
import CategoryHeader from './Header/CategoryHeader';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MenuGridView, MenuListView } from './ViewLayout';
import useAddToCart from '../hook/useAddToCart';
import CartDrawer from './Popup/CartDrawer';

function AllView({ theme, companyId, hasPOS, isGridView, menuItem, style }) {
  const { menuGroupItems, id, name } = menuItem;
  const { products, addToCart } = useAddToCart();
  const [open, setOpen] = useState(false);
  const menuCartItem = (item) => {
    return {
      id: item.id,
      menuItemName: item.menuItemName,
      code: item.code,
      price: item.price,
    };
  };
  return (
    <div className='container'>
      <div className='bgWrapper'>
        <section className='categorySection sectionSpace'>
          <CategoryHeader
            title={name}
            style={{ ...style, fontSize: `${theme.size.header}` }}
          />
          {isGridView ? (
            <div className='MenuList gridview'>
              <div className='row'>
                {menuGroupItems?.length > 0 &&
                  menuGroupItems?.map((item, index) => (
                    <React.Fragment key={index}>
                      <MenuGridView
                        theme={theme}
                        companyId={companyId}
                        hasPOS={hasPOS}
                        item={item}
                        style={style}
                      />
                    </React.Fragment>
                  ))}
              </div>
            </div>
          ) : (
            <div className='list'>
              <div className='MenuList listView'>
                <div className='list-wrapper container'>
                  <div className='row'>
                    {menuGroupItems?.length > 0 &&
                      menuGroupItems?.map((item, index) => (
                        <React.Fragment key={index}>
                          <MenuListView
                            theme={theme}
                            companyId={companyId}
                            hasPOS={hasPOS}
                            item={item}
                            style={style}
                          />
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {open && products.length > 0 && (
        <CartDrawer open={open} setOpen={setOpen} />
      )}
    </div>
  );
}

export default AllView;
