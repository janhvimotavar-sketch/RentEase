import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState(() => {

  const savedCart = localStorage.getItem("cartItems");

  return savedCart ? JSON.parse(savedCart) : [];

});

useEffect(() => {

  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems)
  );

}, [cartItems]);

  // ADD TO CART
  const addToCart = (product) => {

    const existingProduct = cartItems.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {

      const updatedCart = cartItems.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        { ...product, quantity: 1 }
      ]);

      toast.success("Product added to cart!");

    }

  };

  // INCREASE QUANTITY
  const increaseQuantity = (name) => {

    const updatedCart = cartItems.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);

  };

  // DECREASE QUANTITY
  const decreaseQuantity = (name) => {

    const updatedCart = cartItems
      .map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);

  };

  // REMOVE PRODUCT
  const removeFromCart = (index) => {

    const updatedCart = [...cartItems];

    updatedCart.splice(index, 1);

    setCartItems(updatedCart);
    toast.error("Product removed!");

  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >s
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;