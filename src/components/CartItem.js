import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <div className="quantity">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
        <button className="remove" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
