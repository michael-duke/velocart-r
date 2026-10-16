import { useState, useEffect, useMemo } from "react";
import { CartStateContext } from "./CartContext.js";
import { CartActionsContext } from "./CartContext.js";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          quantity: quantity,
          deliveryOptionId: "1", // default option
        },
      ];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === productId);
      if (existing && existing.quantity !== newQuantity) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        );
      } else return prevCart;
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateDeliveryOption = (productId, optionId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, deliveryOptionId: optionId } : item,
      ),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const actions = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      updateDeliveryOption,
      updateQuantity,
      clearCart,
    }),
    [],
  );
  return (
    <CartStateContext.Provider
      value={{
        cart,
        cartQuantity,
      }}
    >
      <CartActionsContext.Provider value={actions}>
        {children}
      </CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
}
