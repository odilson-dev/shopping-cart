import { Component, createContext } from "react";
import NavigationBar from "./NavigationBar";
import Shop from "./Shop";

export const ShopContext = createContext({
  cartItems: 0,
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfItemsInCart: [],
      totalItemsAddedToCart: 0,
    };

    this.handleAddingProductToCart = this.handleAddingProductToCart.bind(this);
  }

  handleAddingProductToCart = (product) => {
    // Here i'm trying to filter the list of items in the cart to prevent multiple items with same IDs

    const newListOfItems = this.state.listOfItemsInCart.filter(
      (item) => item.id !== product.id
    );
    newListOfItems.push(product);
    const totalItems = newListOfItems.reduce((accumulator, item) => {
      return (accumulator += parseInt(item.quantity));
    }, 0);
    this.setState((state) => ({
      ...state,
      listOfItemsInCart: newListOfItems,
      totalItemsAddedToCart: totalItems,
    }));
  };

  render() {
    return (
      <>
        <ShopContext.Provider value={this.state.totalItemsAddedToCart}>
          <NavigationBar listOfItems={this.state.listOfItemsInCart} />
          {this.props.children ? (
            this.props.children
          ) : (
            <Shop handleAddingProductToCart={this.handleAddingProductToCart} />
          )}
        </ShopContext.Provider>
      </>
    );
  }
}
