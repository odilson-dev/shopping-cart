function SideBar({ isVisible, handleSideBarVisibility, listOfItems = [] }) {
  let listOfPurchasedItems = listOfItems.map((item) => {
    return (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: ${item.price * item.quantity}</p>
      </div>
    );
  });
  const totalPrice = listOfItems.reduce((accumulator, item) => {
    return (accumulator += item.price * item.quantity);
  }, 0);

  const handleCheckoutButtonClick = () => {
    alert("Thank you for your purchase!");
  };

  const handleCardDetails = () => {
    if (listOfPurchasedItems.length == 0) {
      return (
        <p>
          The Card is empty,
          <br /> start adding items to the Cart
        </p>
      );
    } else {
      return (
        <>
          {listOfPurchasedItems}
          <p className="total">Total: ${totalPrice}</p>
          <button
            onClick={handleCheckoutButtonClick}
            className="checkout-btn"
            type="button"
          >
            Checkout
          </button>
        </>
      );
    }
  };

  return (
    <div id="sidebar" className={isVisible ? "sidebar visible" : "sidebar"}>
      <div className="sidebar-header">
        <h2>Order Details</h2>
        <box-icon name="x" onClick={handleSideBarVisibility}></box-icon>
      </div>
      {handleCardDetails()}
    </div>
  );
}

export default SideBar;
