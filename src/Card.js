import React, { Component } from 'react';

class Card extends Component {
  propTypes: {
    id: React.PropTypes.number,
    image: React.PropTypes.string,
    show: React.PropTypes.string
  },

  render() {
    return (
      <div className="card">
      </div>
    )
  };
}