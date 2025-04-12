import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import "./styles/global.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        {isLoggedIn && <Header onLogout={handleLogout} />}
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/product/:id"
            element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
