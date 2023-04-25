import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [disscount, setDisscount] = useState(true);

  const cartHandlerButton = ({
    id,
    name,
    description,
    price,
    image,
    delivery_time,
  }) => {
    const addTocart = cart?.findIndex((item) => item.id === id);
    if (addTocart === -1) {
      return setCart([
        ...cart,
        {
          id,
          name,
          description,
          price,
          image,
          delivery_time,
          quantity: 1,
        },
      ]);
    } else {
      return setCart(
        cart?.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  };

  const totalPrice = cart.reduce(
    (acc, crr) => acc + crr.price * crr.quantity,
    0
  );

  const disscountPrice = totalPrice - 5;
  return (
    <CartContext.Provider
      value={{
        cartHandlerButton,
        cart,
        removeFromCart,
        totalPrice,
        disscountPrice,
        disscount,
        setDisscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
