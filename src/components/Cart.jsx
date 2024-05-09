import { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputValue: e.target.value,
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addToCart({
      id: this.props.productDetails.id,
      quantity: this.state.inputValue,
      title: this.props.productDetails.title,
      price: this.props.productDetails.price,
    });
    this.setState((state) => ({
      ...state,
      inputValue: "",
    }));
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
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            className="add-to-cart-btn"
            onClick={this.handleSubmit}
          >
            Add to cart
          </button>
        </form>
      </div>
    );
  }
}

export default Cart;
