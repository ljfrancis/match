import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './index.css';

import Card from './Card';
import LevelButton from './Buttons';




export default class App extends Component {


  constructor() {
    super();
    this.cardColors = ["#ee4035", "#f37736", "#fdf498", "#7bc043", 
                        "#0392cf", "#4f372d", "#673888", "#a8e6cf",
                        "#ff8b94", "#011f4b", "#a2798f", "#008080"];

    this.state = {
    cards: this.setCards(6),
    flips: 0,
    matches: 0,
    size: 6
    };
    this.timeout;
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
    for (let i=0; i<size; i++) {
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
  

  /***********************************
  * handle flipping cards on click
  * 
  * @param index int - index of card clicked
  * @return void
  **************************************/
  handleCardFlipAt = index => {
<<<<<<< HEAD
    
    
    if (this.state.flips < 2) {
=======
  	var timeout;

  	if (this.state.flips == 2) {
  		console.log("hey");
  		clearTimeout(timeout);
  		this.resetCards();
  	}
    if (this.state.flips < 2 && !this.state.cards[index].show) {

>>>>>>> f71b07611749c1c82cb6943fff1d27e366586be9

    this.setState({
      //flip count increases
      flips: this.state.flips + 1,
      //set card to be showing
      cards: this.state.cards.map((card, i) => {
        if (i === index) {
          return {
            ...card,
            show: !card.show
          };
        } 
        return card;
      })
    },  () => {
      //when two cards are flipped check for a match
      if (this.state.flips == 2) {
<<<<<<< HEAD
        this.timeout = setTimeout(this.resetCards, 1000);
=======
      	timeout = setTimeout(this.resetCards, 1000);
>>>>>>> f71b07611749c1c82cb6943fff1d27e366586be9
      }
    });

    }
  }

  /***********************************
  * check for match in two flipped cards
  * reset cards if no match found
  * 
  * @param void
  * @return void
  **************************************/
  //if two cards are flipped and don't match, return them
  resetCards = () => {

    //get new flipped cards
    let showingCards = [];
    this.state.cards.map((card) => {
    if (card.match === false &&  card.show === true) {
      showingCards.push(card);
    }
    });

    //check if showing cards are matching
    let matchID = -1;
    let match = false;
    if(showingCards[0].id === showingCards[1].id) {
      matchID = showingCards[0].id;
    }

    let matched = false;
    this.setState({
      flips: 0,
      cards: this.state.cards.map((card) => { 
        if (card.id === matchID) {
          matched = true;
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
        }),
      matches: ((matched) ? (this.state.matches + 1) : this.state.matches)
    }, () => {
      if (this.state.matches == (this.state.cards.length / 2)){
        this.handleWin();
      }
    });
  }


  /***********************************
  * set size of cards array based on difficulty selected
  * 
  * @param size
  * @return void
  **************************************/
  handleLevelChange = (size) => {
    clearTimeout(this.timeout);
    this.setState({
      cards: this.setCards(size),
      size: size,
<<<<<<< HEAD
      flips: 0
=======
      flips: 0,
   		matches: 0
>>>>>>> f71b07611749c1c82cb6943fff1d27e366586be9
    })
  }


  /***********************************
  * alert user and reset cards
  * 
  * @param size
  * @return void
  **************************************/
  handleWin = () => {
    this.setState({
      cards: this.setCards(this.state.size),
      matches: 0,
      flips: 0
    }, () =>{
      alert("You won! ");
    })
  }
  


  render() {
    return (
      <div className="App align-items-center p-5">
         <div className="container card-layout">
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
        <div className="container button-row w-50 pt-5 d-flex justify-content-around">
          <LevelButton size={6} level="Easy" handleLevelChange={this.handleLevelChange}/>
          <LevelButton size={9} level="Medium" handleLevelChange={this.handleLevelChange}/>
          <LevelButton size={12} level="Hard" handleLevelChange={this.handleLevelChange}/>
        </div>
    </div>
    );
  };
};


