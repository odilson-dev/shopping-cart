import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { ShopContext } from "./App";

function NavigationBar({ listOfItems }) {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const cartItemsTotal = useContext(ShopContext);

  const handleSideBarVisibility = () => {
    isSideBarVisible ? setIsSideBarVisible(false) : setIsSideBarVisible(true);
  };

  return (
    <>
      <header>
        <div className="navigation-box-1">
          <h1>Shopping-Cart</h1>
        </div>
        <div className="navigation-box-2">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <box-icon
            id="toggleButton"
            name="cart-alt"
            onClick={handleSideBarVisibility}
          ></box-icon>
          <span className="totalItems">{cartItemsTotal}</span>
        </div>
      </header>
      <SideBar
        isVisible={isSideBarVisible}
        handleSideBarVisibility={handleSideBarVisibility}
        listOfItems={listOfItems}
      />
    </>
  );
}
export default NavigationBar;
