import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food ordering app using Swiggy's API</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
