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
import logo from './images/NyameLogo.png';

// CSS
import styles from './approuter.css';

function PrivateRoute ({component: Component, authed, user, ...rest}) {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} user={user} />
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
      console.log("This is the user info: " ,user);
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: user.email,
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
            <div>
            <img className="logo nav navbar-nav pull-left" src={logo} alt={"logo"}/>
            </div>
            <div>
              <h2>NYAME</h2>
            </div>



            <div className="container">
              <div className="col-lg-6 websiteName">

                </div>



              <div className="navbar-header">
                <div className="col-lg-6">

              </div>
              </div>

              <ul className="nav navbar-nav pull-right">
                  {this.state.authed
                    ?
                    <div>
                     <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                     <Link to="/profile" className="navbar-brand">Profile</Link>
                    <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    </div>

                    :
                    <div className="navigationbuttons">
                      <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/Signup" className="navbar-brand">Signup</Link>
                      </span>
                    </div>}
              </ul>
            </div>
          </nav>
          <div className="container logandsign">
            <div className="row loginRow">
              <Switch>
                <Route path='/' exact component={Login} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/Signup' component={SignUp} />
                <PrivateRoute authed={this.state.authed} path='/dashboard' component={()=><CommentBox  url='http://localhost:3001/api/comments'
 pollInterval={2000}/>}/>
                <PrivateRoute authed={this.state.authed} user={this.state.user} path='/profile' component={Profile} />
                <Route component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
