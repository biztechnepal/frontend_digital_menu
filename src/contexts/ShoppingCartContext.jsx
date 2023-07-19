import { createContext, ReactNode, useContext, useState } from 'react';
import ShoppingCart from '../component/Popup/ShoppingCart';
import { placeOrderService } from '../services/order';
import useLocalStorage from '../hook/useLocalStorage';
import { useLocation } from 'react-router-dom';

// type ShoppingCartProviderProps = {
//   children: ReactNode
// }

// type CartItem = {
//   id: number
//   quantity: number
// }

// type ShoppingCartContext = {
//   openCart: () => void
//   closeCart: () => void
//   getItemQuantity: (id: number) => number
//   increaseCartQuantity: (id: number) => void
//   decreaseCartQuantity: (id: number) => void
//   removeFromCart: (id: number) => void
//   cartQuantity: number
//   cartItems: CartItem[]
// }

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('shopping-cart', []);

  const cartTotalItem = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const { search } = useLocation();
  const tableName = new URLSearchParams(search).get('table');
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const getItemQuantity = (id) =>
    cartItems?.find((item) => item?.id === id)?.quantity || 0;

  function increaseCartQuantity(menuItem, id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          {
            id,
            menuItemName: menuItem.menuItemName,
            code: menuItem.code,
            quantity: 1,
          },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              code: menuItem.code,
              menuItemName: menuItem.menuItemName,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(menuItem, id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              menuItemName: menuItem.menuItemName,
              code: menuItem.code,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }
  const sendMenuOrder = () => {
    const items = cartItems.map((item) => ({
      orderItemCode: item.code,
      quantity: item.quantity,
    }));
    const values = {
      // companyId: localStorage.getItem('companyId'),
      // tableName: tableName,
      // orderItemList: items,
    };
    console.log(values);
    placeOrderService(values)
      .then((response) => {
        setCartItems([]);
        localStorage.removeItem('shopping-cart');
        localStorage.removeItem('products');
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
        const { data } = error.response;
        Object.keys(data).forEach((key) => {
          alert(`${data[key][0]}`);
        });
      });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartTotalItem,
        sendMenuOrder,
      }}
    >
      {children}
      <ShoppingCart open={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
