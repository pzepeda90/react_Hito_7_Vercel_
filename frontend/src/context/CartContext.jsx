import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pizza, quantity = 1) => {
    const existingItem = cartItems.find(item => item.id === pizza.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === pizza.id 
          ? { ...item, cantidad: item.cantidad + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...pizza, cantidad: quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}; 