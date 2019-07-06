import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};

		this.incrementCounter = this.incrementCounter.bind(this);
	}

	incrementCounter(two) {
		let counter;

		if (two) {
			counter = this.state.counter + 2;
		} else {
			counter = this.state.counter + 1;
		}

		this.setState({
			counter
		});
	}

	render() {
		const {two} = this.props;

		return (
			<div className="wrapper">
				<div>
					{this.state.counter}
				</div>

				<button type="button" className="btn btn-primary" onClick={() => this.incrementCounter(two)}>
					Increment
				</button>
			</div>
		)
	}
}

Home.propTypes = {
	two: PropTypes.bool,
};
