import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
	render() {
		return (
			<div>
				{' '}
				Error 404! <Link to="/dashboard">Go Back to the office Banter!</Link>
			</div>
		);
	}
}

export default PageNotFound;
