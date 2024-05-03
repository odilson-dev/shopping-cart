import { Component } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavigationBar />
        <div className="home">
          <div className="home-cover">
            <h1>Let's choose a new outfit for you!</h1>
            <Link to="/shop" className="call-to-action-btn">
              Shop Now
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
