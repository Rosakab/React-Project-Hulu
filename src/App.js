import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./components/ProductDetail";
import ContactPage from "./pages/ContactPage";
import ShoppingCart from "./components/ShoppingCart";
import CartProvider from "./context/CartContext";
import LoginProvider from "./context/LoginContext";

const App = () => {
  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/loginForm" element={<LoginPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>

    // <BrowserRouter>
    // <Routes>
    //   <Route element={<MainLayout/>}>
    //     <Route  path="/" element ={<ProductPage />}></Route>
    //   </Route>
    // </Routes>
    // </BrowserRouter>
  );
};

export default App;
