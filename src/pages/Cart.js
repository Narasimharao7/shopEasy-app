import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import Popup from "../components/Popup";
import "../styles/cart.css";

function Cart() {
  const { cart, clearCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleCheckout = () => {
    clearCart();
    setShowPopup(true);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="total">
            <p>Total: ${total}</p>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
      {showPopup && (
        <Popup
          message="Order placed successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Cart;
