import React from "react";
import { connect } from "react-redux";
import Footer from "./components/footer";
import Header from "./components/header";
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleButtonClickIncrement = e => {
    e.preventDefault();
    let count = this.state.counter + 1;
    this.setState({ counter: count });
  };

  handleButtonClickDecrement = e => {
    e.preventDefault();
    let count = this.state.counter - 1;
    this.setState({ counter: count });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <a onClick={this.handleButtonClickIncrement}>Click Me +1</a>
        <a onClick={this.handleButtonClickDecrement}>Click Me -1</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
