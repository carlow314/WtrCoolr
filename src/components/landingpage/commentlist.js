import React, {Component} from 'react';
import Comment from './comment';
import style from '../style';
class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment uniqueID = {comment['_id']}
        onCommentDelete = {this.props.onCommentDelete}
        onCommentUpdate = {this.props.onCommentUpdate}
        key = {comment._id} >
        { comment.text || 'empty!'}
        </Comment>
        )
    })
    return (
    <div style = {style.commentList} >
      { commentNodes} </div>
    )
  }
}
export default CommentList;
