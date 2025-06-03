import React, { createContext, useContext, useState } from 'react';

const contextCart = createContext();


export const CartTab = ({ children }) => {
    const [cartProductItems, setcartProductItems] = useState([]);
    const [openCart, setopenCart] = useState(false);

    const addToCart = (product) => {
        const itemExist = cartProductItems.find(item => item.id === product.id);
        if (itemExist) {
            setcartProductItems(
                cartProductItems.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setcartProductItems([...cartProductItems, { ...product, qty: 1 }]);
        }
    };

    const removeItemFromCart = (id) => {
        setcartProductItems(cartProductItems.filter(item => item.id !== id));
    }

    const addQty = (id) => {
        setcartProductItems(cartProductItems.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)); 
    }

    const minusQty = (id) => {
        setcartProductItems(cartProductItems.map(item => {
            if (item.id === id) {
                return item.qty > 1 ? {...item, qty: item.qty - 1} : null;
            }
            return item;
        }).filter(Boolean));
    };

    return (
        <contextCart.Provider value={{ cartProductItems, addToCart, openCart, setopenCart, removeItemFromCart, addQty, minusQty}}>
            {children}
        </contextCart.Provider>
    );
};

export const UseCart = () => useContext(contextCart);