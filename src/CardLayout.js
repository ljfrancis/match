import React, { Component } from 'react';
import './Card'

class CardLayout extends Component {
  propTypes: {
    cards: React.PropTypes.array
  },

  render() {
    return (
      //loop through cards
      <div className="cardLayout">
        {this.props.cards.map((card, index) =>{
          return(
            <Card 
              key={card.id}
              image={card.image}
              show={card.show}
            />
          );
        }.bind(this))}
      </div>
    )
  };
}