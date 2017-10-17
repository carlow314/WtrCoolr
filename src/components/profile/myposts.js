import React, {Component} from 'react';
import styles from './profile.css';

class Myposts extends Component {
  render() {
      return (
        <div className="container myposts">
          <div className="row title">
            <div className="posttitle">MY POSTS</div>
          </div>

          <div className="row posts">
            <div className="col-lg-10 mycard">
              <div className="card post">
                <div className="card-body">
                  This is some text within a card block.
                </div>
              </div>
            </div>
          </div>

        </div>

      )
    }
}

export default Myposts;
