import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./components/pages/cartPage";
import ShopPage from "./components/pages/shopPage";
import React from "react";
import Messages from "./components/messages";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ShopPage /> },
    { path: "/cart", element: <CartPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
