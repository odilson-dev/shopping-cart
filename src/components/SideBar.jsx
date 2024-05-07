function SideBar({ isVisible, handleSideBarVisibility }) {
  return (
    <div id="sidebar" className={isVisible ? "sidebar visible" : "sidebar"}>
      <div className="sidebar-header">
        <h2>Order Details</h2>
        <box-icon name="x" onClick={handleSideBarVisibility}></box-icon>
      </div>

      <p>Product 1: 2 units</p>
      <p>Product 2: 3 units</p>
      <p>Total: $50</p>
    </div>
  );
}
export default SideBar;
