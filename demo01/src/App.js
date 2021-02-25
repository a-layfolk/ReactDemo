import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ul className="my-list">
          <li>{false ? "I" : "You"}</li>
          <li>Love</li>
          <li>React</li>
        </ul>
      </div>
    )
  }
}

export default App;