import { Component } from "react";
import Cart from "./Cart";
import NavigationBar from "./NavigationBar";

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavigationBar />
        <div className="cart-box">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </>
    );
  }
}

export default Shop;
