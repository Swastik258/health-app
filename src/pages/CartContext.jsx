import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);
    if (existingItem) {
      // Increase quantity
      return prevItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new product
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};


const removeFromCart = (id) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        // reduce quantity by 1
        return prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // remove item completely
        return prevItems.filter((item) => item.id !== id);
      }
    }
    return prevItems;
  });
};

const removeItemCompletely = (id) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
};

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
  value={{
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    removeItemCompletely,
  }}
>
  {children}
</CartContext.Provider>

  );
};

export const useCart = () => useContext(CartContext);
