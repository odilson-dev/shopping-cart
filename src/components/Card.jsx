import { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
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
  }

  render() {
    return (
      <div className="card">
        <img
          src={this.props.productDetails.image}
          alt="card-image"
          className="card-image"
        />
        <p className="card-title">{this.props.productDetails.title}</p>
        <p className="card-description">
          {this.props.productDetails.description.substring(0, 50)}
        </p>
        <div className="price-box">
          $<span className="card-price">{this.props.productDetails.price}</span>
        </div>

        <form className="form">
          <input
            type="number"
            className="card-input"
            name="cart-label"
            min="0"
            value={this.state.inputValue}
            max="100"
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

export default Card;
