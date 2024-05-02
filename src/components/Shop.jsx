import { Component } from "react";
import NavigationBar from "./NavigationBar";

class Shop extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavigationBar />
        <h1>Shop</h1>
      </>
    );
  }
}

export default Shop;
