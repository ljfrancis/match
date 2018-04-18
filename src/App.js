import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './index.css';

import Card from './Card';



//unique cards
let cards = [
  {
  id: 1,
  image: "x",
  show: true,
  match: false
  },
  {
  id: 2,
  image: "o",
  show: true,
  match: false
  },
  {
  id: 3,
  image: "z",
  show: true,
  match: false
  },
];

//duplicate and randomize card order


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
                image={card.image}
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


