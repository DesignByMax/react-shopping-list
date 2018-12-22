import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Counter';
import Counter from './Counter';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 3, value: 0 },
      { id: 3, value: 0 },
      { id: 3, value: 0 }
    ]
  }
  render() {
    return (
      <div>
        <h4>SHOPPING CART</h4>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} selected/>
        ))}

      </div>
    );
  }
}

export default App;
