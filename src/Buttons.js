import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LevelButton extends Component {

	render() {
		return (
			<button className="btn btn-secondary" onClick={() => {this.props.handleLevelChange(this.props.size)}}>{this.props.level}</button>
		)
	}
};

LevelButton.PropTypes = {
	size: PropTypes.number,
	level: PropTypes.string,
	handleLevelChange: PropTypes.func
};