import { Component } from "react";
import NavigationBar from "./NavigationBar";
import Shop from "./Shop";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfItemsInCart: [],
    };
    this.handleAddingProductToCart = this.handleAddingProductToCart.bind(this);
  }
  handleAddingProductToCart = (product) => {
    // Here i'm trying to filter the list of items in the cart to prevent multiple items with same IDs
    console.log(product);
    const newListOfItems = this.state.listOfItemsInCart.filter(
      (item) => item.id !== product.id
    );
    newListOfItems.push(product);
    this.setState((state) => ({ ...state, listOfItemsInCart: newListOfItems }));
  };

  render() {
    return (
      <>
        <NavigationBar listOfItems={this.state.listOfItemsInCart} />
        {this.props.children ? (
          this.props.children
        ) : (
          <Shop handleAddingProductToCart={this.handleAddingProductToCart} />
        )}
      </>
    );
  }
}
