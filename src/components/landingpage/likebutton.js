import React, { Component } from 'react';
import style from './style';
class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      updated: false
    };
    this.updateLikes = this.updateLikes.bind(this);
  }
  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes ++,
          updated: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes --,
          updated: false
        };
      });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.updateLikes}key = {comment['_id']} >>Like</button>
        <p>{this.state.likes}</p>
      </div>
    );
  }
}
export default Likes;
