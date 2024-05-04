import { Component } from "react";

class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="cart">
        <img
          src="/src/Images/chess.png"
          alt="cart-image"
          className="cart-image"
        />
        <p className="cart-label">Cart label</p>
        <p className="cart-description">
          {" "}
          has been the industry standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="price-box">
          $<span className="cart-price">25</span>
        </div>

        <form className="form">
          <input type="number" className="cart-input" name="cart-label" id="" min="0" max="0" />
          <button type="button" className="add-to-cart-btn">
            Add to cart
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
