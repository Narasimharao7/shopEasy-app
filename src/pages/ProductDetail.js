import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api";
import { useCart } from "../context/CartContext";
import "../styles/product.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
