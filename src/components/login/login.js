import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, resetPassword } from '../../helpers/auth';
import styles from './loginSignUp.css';

function setErrorMsg(error) {
	return {
		loginMessage: error
	};
}

export default class Login extends Component {
	state = { loginMessage: null };
	handleSubmit = e => {
		e.preventDefault();
		login(this.email.value, this.pw.value).catch(error => {
			this.setState(setErrorMsg('Invalid username/password.'));
		});
	};
	resetPassword = () => {
		resetPassword(this.email.value)
			.then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
			.catch(error => this.setState(setErrorMsg(`Email address not found.`)));
	};
	render() {
		return (
			<div className="col-sm-6 col-sm-offset-3 loginBox">
				<form className="form" onSubmit={this.handleSubmit}>
					<div className="signUpHere">
						Don't have an account yet? <Link to="/Signup"> Sign up here!</Link>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							className="form-control loginpass"
							ref={email => (this.email = email)}
							placeholder="Email"
						/>
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
					{this.state.loginMessage && (
						<div className="alert alert-danger" role="alert">
							<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
							<span className="sr-only">Error:</span>
							&nbsp;{this.state.loginMessage}{' '}
							<button onClick={this.resetPassword} className="alert-link">
								Forgot Password?
							</button>
						</div>
					)}
					<button type="submit" className="btn btn-primary btn-block">
						LOGIN
					</button>
				</form>
			</div>
		);
	}
}
