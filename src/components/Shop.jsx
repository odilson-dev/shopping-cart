import { useEffect, useState } from "react";
import Cart from "./Cart";
import NavigationBar from "./NavigationBar";

function Shop() {
  const { products, error, loading } = useFakeStoreAPI();
  const [selectedCategory, setSelectedCategory] = useState("men's clothing");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const handleCategoryChoice = (e) => {
    setSelectedCategory(e.target.value);
  };
  const cartBox = products.map((product) => {
    if (product.category == selectedCategory) {
      return <Cart key={product.id} productDetails={product} />;
    }
  });

  return (
    <>
      <NavigationBar />

      <label>
        Category:
        <select
          name="category"
          onChange={handleCategoryChoice}
          value={selectedCategory}
        >
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </label>
      <div className="cart-box">{cartBox}</div>
    </>
  );
}

export default Shop;

const useFakeStoreAPI = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};
