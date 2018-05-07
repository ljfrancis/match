import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './index.css';

import Card from './Card';

//card colors
const cardColors = ["#ee4035", "#f37736", "#fdf498", "#7bc043", 
                    "#0392cf", "#4f372d", "#673888", "#a8e6cf",
                    "#ff8b94", "#011f4b", "#a2798f", "#008080"];





export default class App extends Component {


  constructor = () => {
    this.cardColors = ["#ee4035", "#f37736", "#fdf498", "#7bc043", 
                        "#0392cf", "#4f372d", "#673888", "#a8e6cf",
                        "#ff8b94", "#011f4b", "#a2798f", "#008080"];

    this.state = {
    cards: this.setCards(8),
    win: false,
    flips: 0
    };
  }


  /*
  * create duplicate cards and randomizes them
  * 
  * @param size int - number of unique cards
  * @return cards - randomized set of card pairs
  */
  setCards = (size) => {

    let uniqueCards = [];

    //create unique cards
    for (let i=0; i<=size; i++) {
      uniqueCards.push({
        id: i,
        color: this.cardColors[i],
        show: false,
        match: false
      })
    } 


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

    return cards;
  }

  

  /*
  * handle flipping cards on click
  * 
  * @param index int - index of card clicked
  * @return void
  */
  handleCardFlipAt = index => {

    if (this.state.flips < 2) {
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

    }




    //if two cards are flipped and don't match, return them
    const resetCards = () => {
      console.log(this.state.flips);
      if (this.state.flips == 2) {

        //get new flipped cards
        let showingCards = [];
        this.state.cards.map((card) => {
        if (card.match === false &&  card.show === true) {
          showingCards.push(card);
        }
        });

        //check if showing cards are matching
        let matchID = -1;
        if(showingCards[0].id === showingCards[1].id) {
          matchID = showingCards[0].id;
        }



        this.setState({
          flips: 0,
          cards: this.state.cards.map((card) => {
            if (card.id === matchID) {
              return {
                ...card,
                match: true
              };
            }
            if (card.match === false && card.show === true) {
              return {
                ...card,
                show: false
              };
            }
            return card;
          })
        });
      } 
    }; 

    setTimeout(resetCards, 2000);
  };




  render() {
    return (
      <div className="App">
         <div className="card-layout">
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


