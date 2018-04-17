import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './index.css';

import Card from './Card';



//unique cards
let cards = {
  1: {
  id: 1,
  image: "x",
  show: true,
  match: false
  },
  2: {
  id: 2,
  image: "o",
  show: true,
  match: false
  },
  3: {
  id: 3,
  image: "z",
  show: true,
  match: false
  },
};

//duplicate and randomize card order


export default class App extends Component {

  state = {
    cards: cards,
    win: false,
    flips: 0
  };

  handleCardFlip = index => {
    this.state.cards[index].setState({
      show: !this.state.show
    });
    console.log(this.state.flips);
    if (this.state.flips === 2) {
      this.setState({
        flips: 0,
        cards: Object.entries(this.state.cards).map((card) => {
          if (card.match === false && card.show === true) {
            return {
              ...card,
              show: false
            };
          }
          return card;
        })
      });
    } else {
      this.setState({flips: this.state.flips + 1})
    }

  };



  render() {
    return (
      <div className="App">
         <div className="cardLayout">
            {Object.entries(this.state.cards).map((card, index) =>{
            return(
              <Card 
                index={index}
                id={card.id}
                image={card.image}
                show={card.show}
                onClick={this.handleCardFlip}
              />
            );
          })}
        </div>
    </div>
    );
  }
}


