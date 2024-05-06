import NavigationBar from "./NavigationBar";
import Cart from "./Cart";
import { useEffect, useState } from "react";

function Shop() {
  const { products, error, loading } = useFakeStoreAPI();
  const [category, setCategory] = useState("men's clothing");
  console.log(products);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;
  const cartBox = products.map((product) => (
    <Cart key={product.id} productDetails={product} />
  ));
  const handleCategoryChoice = (e) => {};

  return (
    <>
      <NavigationBar />
      <select>
        <option value="men's clothing" selected>
          Men's clothing
        </option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
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
