import React, {Component} from 'react';
import styles from './profile.css';

class Myposts extends Component {
  render() {
      return (
          <div className="container">
            <div className="posttitle">MY POSTS</div>

            <div className="row">
              <div className="card post">
                <div className="card-body">
                  This is some text within a card block.
                </div>
              </div>
            </div>

          </div>
      )
    }
}

export default Myposts;