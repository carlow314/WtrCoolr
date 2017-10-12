import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CommentBox from '../components/landingpage/commentBox';
import Login from '../components/login/login';
import SignUp from '../components/login/signup';
import PageNotFound from '../components/other/pagenotfound';
import Profile from '../components/profile/profile';
import { firebaseAuth } from '../config/constants';
import { logout } from '../helpers/auth'

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
  }
  function PublicRoute ({component: Component, authed, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === false
          ? <Component {...props} />
          : <Redirect to='/dashboard' />}
      />
    )
  }


  export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">NYAME</Link>
              </div>
              <ul className="nav navbar-nav pull-right">
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/Signup" className="navbar-brand">Signup</Link>
                      </span>}
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Login} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/Signup' component={SignUp} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={()=><CommentBox  url='http://localhost:3001/api/comments'
 pollInterval={2000}/>}/>
                <PrivateRoute authed={this.state.authed} path='/profile' component={Profile} />
                <Route component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
