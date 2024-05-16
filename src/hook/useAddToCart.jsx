import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { placeOrderService } from "../services/order";

const useAddToCart = () => {
    const [itemCount, setItemCount] = useState(null);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    const navigate = useNavigate()
    const { search } = useLocation();

    const tableName = new URLSearchParams(search).get("table");

    // const [products, setProducts] = useState([
    //     { id: 1, name: 'Momo', price: 10 },
    //     { id: 2, name: 'Burger', price: 20 },
    //     { id: 3, name: 'Pizza', price: 30 },
    // ]);
    //   const products = [
    //     { id: 1, name: 'Product 1', price: 10 },
    //     { id: 2, name: 'Product 2', price: 20 },
    //     { id: 3, name: 'Product 3', price: 30 },
    //   ];

    useEffect(() => {
        const products = localStorage.getItem("products");
        if (products) setProducts(JSON.parse(products));

        setItemCount(products?.length)
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const addToCart = (product) => {
        const existingItem = products.find((item) => item.id === product.id);
        if (existingItem) {
            const updatedItems = products.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setProducts(updatedItems);
        } else {
            const newItem = { ...product, quantity: 1 };
            setProducts([...products, newItem]);
        }
        // navigate(0)
    };

    const increaseItem = (productId, index) => {
        const updatedItems = products.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setProducts(updatedItems);
    };
    const decreaseItem = (productId, index) => {
        const updatedItems = products.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
        setProducts(updatedItems.filter((item) => item.quantity > 0));
    };

    const removeItem = (productId) => {
        setProducts(products.filter((item) => item.id !== productId));
    };

    const sendMenuOrder = () => {
        // Logic to place the order
        console.log('Order placed:', products);
        console.log('Total Price:', getTotalPrice());
        const items = products.map((item) => ({
            orderItemCode: item.code,
            quantity: item.quantity
        }))
        const values = {
            tableName: tableName,
            orderItemList: items
        }
        console.log(values)
        placeOrderService(values)
            .then(response => {
                setProducts([]);
                localStorage.clear()
                console.log('ORDER', response)
            })
            .catch(error => {
                console.log('ORDER ERROR', error)

            })
    };

    const getTotalPrice = () => {
        const totalPrice = products.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0
        );
        return totalPrice.toFixed(2);
    };


    return {
        addToCart,
        setProducts,
        setItemCount,
        itemCount,
        products,
        increaseItem,
        decreaseItem,
        removeItem,
        getTotalPrice,
        sendMenuOrder
    };
};

export default useAddToCart;
