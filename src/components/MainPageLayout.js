import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { HomePage } from "../pages/HomePage";
import { getCart } from "../utils/helpers";
import { Header } from "./Header";

export const MainPageLayout = () => {
  const [cart, setCart] = useState(getCart());
  const [cartItems, setCartItems] = useState(0);

  // this updates the total item in cart when value of cart changes also cart is added to localStorage
  useEffect(() => {
    localStorage.setItem("topseller_cart", JSON.stringify(cart));
    let total = 0;

    for (const id in cart) {
      if (!cart[id]) continue;
      total += cart[id].count;
    }

    setCartItems(total);
  }, [cart]);

  return (
    <>
      <Header cartItems={cartItems} />

      <Routes>
        <Route
          path="/topseller/"
          element={<HomePage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/topseller/cart"
          element={<Cart cart={cart} setCart={setCart} cartItems={cartItems} />}
        />
      </Routes>
    </>
  );
};
