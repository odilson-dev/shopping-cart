import { Component } from "react";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="home">
          <div className="about-cover">
            <div className="about-box">
              <h2>About</h2>
              <p>
                This app was made with love and passion by{" "}
                <a target="_blank" href="https://github.com/odilson-dev">
                  {" "}
                  Odilson Woodly Italis
                </a>
                . Odilson learned to code from{" "}
                <a target="_blank" href="https://theodinproject.com">
                  The Odin Project
                </a>
                . Check the{" "}
                <a
                  target="_blank"
                  href="https://github.com/odilson-dev/shopping-cart"
                >
                  project's repository
                </a>
              </p>
              <div className="about-link-box"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default About;
