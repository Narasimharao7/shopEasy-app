import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/header.css";

function Header({ onLogout }) {
  const { cart } = useCart();
  const navigate = useNavigate();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <header className="header">
      <Link to="/" className="link-item">
        <div className="logo">ShopEasy</div>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart {cartCount > 0 && <span>({cartCount})</span>}
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
