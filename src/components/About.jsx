import { Component } from "react";
import NavigationBar from "./NavigationBar";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <NavigationBar />
        <h1>About</h1>
      </>
    );
  }
}
export default About;
