import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts, getCategories, getProductsByCategory } from "../api";
import "../styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const prods = await getProducts();
      const cats = await getCategories();
      setProducts(prods);
      setCategories(["all", ...cats]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory && selectedCategory !== "all") {
        const prods = await getProductsByCategory(selectedCategory);
        setProducts(prods);
      } else {
        const prods = await getProducts();
        setProducts(prods);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
