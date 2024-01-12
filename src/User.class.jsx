import React, { Component } from "react";

class UserClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alex",
      age: 23,
    };
  }

  increaseAge = () => {
    this.setState((prevState) => {
      return {
        age: prevState.age + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>User class component</h1>
        <ul>
          <li>First name: {this.state.name}</li>
          <li>Age: {this.state.age}</li>
        </ul>
        <button onClick={this.increaseAge}>Increase age</button>
      </div>
    );
  }
}

export default UserClassComponent;
