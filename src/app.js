import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  reset = () => {
    this.setState({ clicks: this.state.clicks===0 });
  }
  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>COUNT</button>
        <button onClick={this.reset}>RESET</button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
