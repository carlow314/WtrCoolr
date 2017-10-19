import React, {Component} from 'react';
import styles from './profile.css';
import {changeEmail,changePassword} from '../../helpers/auth';

class Profile extends Component {
  handleEmailChange = (e) => {
    e.preventDefault()
    changeEmail(this.email.value)
    .catch((error) => {
      console.log(error);
    })
  }

  handlePwChange = (e) => {
    e.preventDefault()
    changePassword(this.pw.value)
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    console.log("im the props", this.props)
    return (
      <div className="container navigation">

        <div className="row profile">
          <div className="col-lg-2 profilenav">
            <div className="btn-group-vertical">
              <button type="button" className="btn btn-secondary">Profile</button>
              <button type="button" className="btn btn-secondary">Favorite Posts</button>
              <button type="button" className="btn btn-secondary">My Posts</button>
              <button type="button" className="btn btn-secondary">My Ranking</button>
              <button type="button" className="btn btn-secondary">Notifications</button>
            </div>
          </div>

          <div className="col-lg-10 allInfo">
            <div className="title">PROFILE</div>
            <div class="line-separator"></div>

            <form  className='form-inline' onSubmit={this.handleEmailChange}>
              <div className="form-group">
                <input className="form-control" ref={(email) => this.email = email} placeholder={this.props.user}/>
              </div>
              <button type="submit" className="btn btn-primary changeEmail">Change Email</button>
            </form>

            <form  className='form-inline' onSubmit={this.handlePwChange}>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="******" ref={(pw) => this.pw = pw} />
              </div>
              <button type="submit" className="btn btn-primary changePassword">Change Password</button>
            </form>

            {/* Favorite Posts Set Up */}
            <div className="row favposts">
              <div className="title">FAVORITE POSTS</div>
              <div class="line-separator"></div>

              <div className="mycard">
                <div className="card post">
                  <div className="card-body">
                    Oh my gosh I freaking love this post!
                  </div>
                  <button type="button" class="btn btn-primary btn-sm favDelete">Delete From Favorites</button>
                </div>
              </div>
            </div>

            {/* My Posts Set Up */}
            <div className="row myposts">
              <div className="title">MY POSTS</div>
              <div class="line-separator"></div>

              <div className="mycard">
                <div className="card post">
                  <div className="card-body">
                    An old post of yours lies here, neglected and gathering dust.
                  </div>
                  <div className="row">
                    <button type="button" class="btn btn-primary btn-sm myPosts">Delete</button>
                    <button type="button" class="btn btn-primary btn-sm myPosts">Edit</button>
                  </div>
                </div>
              </div>
            </div>

            {/* My Ranking */}
            <div className="row ranking">
              <div className="title">RANKING</div>
              <div class="line-separator"></div>

              <div className="rankingInfo">
                <h4>Your Ranking: 25324</h4>
                <p>This is your ranking number! Yay! You're awesome!</p>
                <p>Note: Ranking is based on the amount of times your posts have been voted for.</p>
              </div>

              {/* Notifications */}
              <div className="row notifications">
                <div className="title">NOTIFICATIONS</div>
                <div class="line-separator"></div>

                <div className="notificationOptions">
                  <form>
                    <div class="form-row">
                      <div class="col-auto">
                        <div class="form-check mb-2 mb-sm-0">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" /> Receive Emails
                          </label>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="form-check mb-2 mb-sm-0">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" /> Notify me when my posts are liked
                          </label>
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="form-check mb-2 mb-sm-0">
                          <label class="form-check-label">
                            <input class="form-check-input" type="checkbox" /> Update me for new posts
                          </label>
                        </div>
                      </div>
                      <div class="col-auto">
                        <button type="submit" class="btn btn-primary notificationButtons">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Profile;
