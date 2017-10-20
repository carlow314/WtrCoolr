import React, { Component } from 'react';
import { auth } from '../../helpers/auth';
import styles from './loginSignUp.css';

function setErrorMsg(error) {
	return {
		registerError: error.message
	};
}

export default class SignUp extends Component {
	state = { registerError: null };
	handleSubmit = e => {
		e.preventDefault();
		auth(this.email.value, this.pw.value).catch(e => this.setState(setErrorMsg(e)));
	};
	render() {
		return (
			<div className="col-sm-6 col-sm-offset-3 loginBox">
				<form className="form∏" onSubmit={this.handleSubmit}>
					<div className="signUpHere">Sign up here!</div>
					<div className="form-group">
						<label>Email</label>
						<input className="form-control" ref={email => (this.email = email)} placeholder="Email" />
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							ref={pw => (this.pw = pw)}
						/>
					</div>
					{this.state.registerError && (
						<div className="alert alert-danger" role="alert">
							<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
							<span className="sr-only">Error:</span>
							&nbsp;{this.state.registerError}
						</div>
					)}
					<button type="submit" className="btn btn-primary btn-block">
						REGISTER
					</button>
				</form>
			</div>
		);
	}
}
