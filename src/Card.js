import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {



  render() {
    return (
      <div 
        className={ this.props.show ? "card" : "card card-flipped"}
        style={{backgroundColor: this.props.color}}
        onClick={() => this.props.handleCardFlipAt(this.props.index)}
      >
      <img href={this.props.image} alt=""></img>
      </div>
    )
  };
};

Card.PropTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    color: PropTypes.string,
    show: PropTypes.bool,
    handleCardFlipAt: PropTypes.func
};