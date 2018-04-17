import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {


  state = {
      show: this.props.show
    };

  flip = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className={ this.state.show ? "card" : "card card-flipped"}
        onClick={() => this.props.handleCardFlip(this.props.index)}
      //if show = false -> className="face-down"
      >
      <img href={this.props.image} alt=""></img>
      </div>
    )
  };
};

Card.PropTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    image: PropTypes.string,
    show: PropTypes.bool,
    handleCardFlip: PropTypes.func
};