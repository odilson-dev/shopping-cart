import { Component } from "react";
import NavigationBar from "./NavigationBar";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavigationBar />
        <h1>Home</h1>
      </>
    );
  }
}

export default Home;
