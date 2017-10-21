import React, { Component } from 'react';

class LikeButton extends React.Component {
	constructor() {
		super();
		this.state = {
			liked: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			liked: prevState.liked + 1
		}));
	}
	render() {
		return (
			<div className="customContainer">
				<button className=" btn btn-primary fa fa-heart" onClick={this.handleClick} />
				<h6 className="inline"> This post has been liked: {this.state.liked} Times!!</h6>
			</div>
		);
	}
}

export default LikeButton;
