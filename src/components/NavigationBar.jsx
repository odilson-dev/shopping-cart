import { Component } from "react";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <div className="navigation-box-1">
          <h1>Shopping-Cart</h1>
        </div>
        <div className="navigation-box-2">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>
      </header>
    );
  }
}
export default NavigationBar;
