import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Oh no, this route doesn&apos;t exist!</h1>
        <Link to="/">
          You can go back to the home page by clicking here, though!
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
