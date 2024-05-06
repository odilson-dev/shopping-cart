import { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">
        <img
          src={this.props.productDetails.image}
          alt="cart-image"
          className="cart-image"
        />
        <p className="cart-title">{this.props.productDetails.title}</p>
        <p className="cart-description">
          {this.props.productDetails.description.substring(0, 50)}
        </p>
        <div className="price-box">
          $<span className="cart-price">{this.props.productDetails.price}</span>
        </div>

        <form className="form">
          <input
            type="number"
            className="cart-input"
            name="cart-label"
            min="0"
            max="100"
          />
          <button type="button" className="add-to-cart-btn">
            Add to cart
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
