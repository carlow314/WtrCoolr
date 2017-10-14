import React, {Component} from 'react';
import styles from './profile.css';
import Myposts from './myposts.js';
import { userData} from '../../helpers/auth';

class Profile extends Component {

  render() {
    console.log("im the props", this.props)
      return (
        <div className="container">

          <div className="row">
            <div className="profiletitle">PROFILE</div>
          </div>

          <div className="row">
            <div className="col-lg-2 profilenav">
              <div className="btn-group-vertical">
                <button type="button" className="btn btn-secondary">Profile</button>
                <button type="button" className="btn btn-secondary">Favorite Posts</button>
                <button type="button" className="btn btn-secondary">My Posts</button>
                <button type="button" className="btn btn-secondary">My Ranking</button>
                <button type="button" className="btn btn-secondary">Notifications</button>
              </div>
            </div>
            <div className=" col-lg-6 logininfo">
            <form  className='form-inline' onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control" ref={(email) => this.email = email} placeholder={this.props.user}/>
              </div>
              <button type="submit" className="btn btn-primary">Change Email</button>
            </form>
            <form  className='form-inline' onSubmit={this.handleSubmit}>
              <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
              </div>
              <button type="submit" className="btn btn-primary">Change Password</button>
            </form>
          </div>
          </div>
          <Myposts />
      </div>
      )
    }
}

export default Profile;
