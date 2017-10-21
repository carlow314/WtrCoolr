import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div className="container">
      <div className=" col-lg-12">
      <h3> Login via </h3>
	<div className="social-buttons">
	<a href="#" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
    </div>
  <form>
  <div className="form-group">
    <label className="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label className="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  </div>

    );
  }
}

export default Form;
