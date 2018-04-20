import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './index.css';

import Card from './Card';



//unique cards
let uniqueCards = [
  {
  id: 1,
  color: "#06f",
  show: false,
  match: false
  },
  {
  id: 2,
  color: "#f55",
  show: false,
  match: false
  },
  {
  id: 3,
  color: "#fe0",
  show: false,
  match: false
  },
];

//duplicate and randomize card order
let cards = [];

for (var i=0; i < uniqueCards.length; i++) {
  cards.push(uniqueCards[i]);
  cards.push(uniqueCards[i]);
};

for (var i=0; i<cards.length; i++) {
  let j = Math.floor(Math.random() * cards.length);
  let temp = cards[i];
  cards[i] = cards[j];
  cards[j] = temp;
};


export default class App extends Component {

  state = {
    cards: cards,
    win: false,
    flips: 0
  };

  handleCardFlipAt = index => {
    //flip count increases
    this.setState({flips: this.state.flips + 1})

    //set card to be showing
    this.setState({
      cards: this.state.cards.map((card, i) => {
        if (i === index) {
          return {
            ...card,
            show: !card.show
          };
        } 
        return card;
      })
    });

    console.log(this.state.flips);

    //if two cards are flipped and don't match, return them
    const resetCards = () => {
      if (this.state.flips > 1) {
        this.setState({
          flips: 0,
          cards: this.state.cards.map((card) => {
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
        //flip count increases
        this.setState({flips: this.state.flips + 1})
      }
    }; 

    setTimeout(resetCards, 1000);
  };




  render() {
    return (
      <div className="App">
         <div className="cardLayout">
            {this.state.cards.map((card, index) =>{
            return(
              <Card 
                index={index}
                id={card.id}
                color={card.color}
                show={card.show}
                handleCardFlipAt={this.handleCardFlipAt}
              />
            );
          })}
        </div>
    </div>
    );
  };
};


