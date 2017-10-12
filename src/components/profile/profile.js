import React, {Component} from 'react';
import styles from './profile.css';
import Myposts from './myposts.js';

class Profile extends Component {
  render() {
      return (
        <div className="container">

          <div className="row">
            <div className="profiletitle">PROFILE</div>
          </div>

          <div className="row">
            <div className="col-lg-2 profilenav">
              <div className="btn-group-vertical">
                <button type="button" class="btn btn-secondary">Profile</button>
                <button type="button" class="btn btn-secondary">Favorite Posts</button>
                <button type="button" class="btn btn-secondary">My Posts</button>
                <button type="button" class="btn btn-secondary">My Ranking</button>
                <button type="button" class="btn btn-secondary">Notifications</button>
              </div>
            </div>
            <div className="col-lg-10 logininfo">
              <div className="card">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">email@email.com
                    <button type="button" class="btn btn-secondary email">Change Email</button>
                  </li>
                  <li className="list-group-item">*****
                    <button type="button" class="btn btn-secondary pass">Change Password</button>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <Myposts />

      </div>
      )
    }
}

export default Profile;
