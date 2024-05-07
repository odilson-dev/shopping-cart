import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

function NavigationBar() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

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
        </div>
      </header>
      <SideBar
        isVisible={isSideBarVisible}
        handleSideBarVisibility={handleSideBarVisibility}
      />
    </>
  );
}
export default NavigationBar;
