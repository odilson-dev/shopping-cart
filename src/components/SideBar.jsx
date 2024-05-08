function SideBar({ isVisible, handleSideBarVisibility, listOfItems }) {
  const listOfPurchasedItems = listOfItems.map((item) => {
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

  return (
    <div id="sidebar" className={isVisible ? "sidebar visible" : "sidebar"}>
      <div className="sidebar-header">
        <h2>Order Details</h2>
        <box-icon name="x" onClick={handleSideBarVisibility}></box-icon>
      </div>

      {listOfPurchasedItems.length == 0 ? (
        <p>
          The Card is empty,
          <br /> start adding items to the Cart
        </p>
      ) : (
        listOfPurchasedItems
      )}
      <p className="total">Total: ${totalPrice}</p>
    </div>
  );
}
export default SideBar;
