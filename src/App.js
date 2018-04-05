import React, { Component } from 'react';
import './App.css';
import './index.css';

import './CardLayout';



//unique cards
cards = [
  {
    id: 1,
    image: x,
    show: true
  },
  {
    id: 2,
    image: o,
    show: true
  },
  {
    id: 3,
    image: z,
    show: true
  },
];

//duplicate and randomize card order


class App extends Component {

  getInitialState: () => {
    return {
      win: false
    }
  },

  propTypes: {
    cards: cards
  },

  render() {
    return (
      <div className="App">
        <CardLayout cards={props.cards}/>
      </div>
    );
  }
}

export default App;
