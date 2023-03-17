import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./components/pages/cartPage";
import ShopPage from "./components/pages/shopPage";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <ShopPage /> },
    { path: "/cart", element: <CartPage /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
