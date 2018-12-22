import React, { Component } from 'react';

class Counter extends Component {
	state = {
		value: this.props.value,
		imageUrl: 'yahoo.com',
		tags: ['A', 'B']
	};
	render() {
		console.log(this.props);
		return (
			<div className="counter">
				<span className="badge badge-warning m-2"> {this.formatCount()} </span>{' '}
				<button onClick={ this.handleIncrement } className="btn btn-md btn-primary m-2">Increment</button>
				<button onClick={ () => this.handleDelete(this.props) } className="btn btn-md btn-danger m-2">Delete</button>
				<div>{this.state.tags.length === 0 && 'No tags'} </div>
			</div>
		);
	}

	formatCount = () => {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value;
	}

	handleDelete(props) {
		console.log(props);
	}

	handleIncrement = (product) => {
		console.log("Increment Clicked", product);
		this.setState({value: this.state.value + 1})
	}
}

export default Counter;
