import React, {Component} from 'react';
import Comment from './comment';
import CommentList from './commentlist';


class LikeButton extends React.Component {
  constructor(props) {
		super(props);
    this.state = { noOfLikes: 0};
    this.likeIt = this.likeIt.bind(this);
  }
  
  likeIt() {
  	this.setState({ noOfLikes: this.state.noOfLikes ++});
  }

    render() {
      return (
        <div>
        <button onClick={this.likeIt} className="like">
          <i className="fa fa-heart"></i>&nbsp;
          LIKE</button>
          <div>{this.state.noOfLikes}</div>
          </div>
       );
    }
  }
 
  export default LikeButton;