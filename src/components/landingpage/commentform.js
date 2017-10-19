import React, { Component } from 'react';
import style from '../style';
import styles from './comment.css';

class CommentForm extends Component {
 constructor(props) {
 super(props);
 this.state = {text: '' };
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 let text = this.state.text.trim();
 if (!text) {
 return;
 }
 this.props.onCommentSubmit({text: text });
 this.setState({text: '' });
 }
 selectEmoji(emoji) {
    this.setState({emoji})
  }
 render() {
 return (
   <form onSubmit={ this.handleSubmit }>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="text" className="form-control" id="newComment" placeholder="Say something…" value={ this.state.text || this.state.emoji} onChange={ this.handleTextChange } />
    <input type="submit"  style={ style.commentFormPost } value='Post'/>
  </div>
</form>
 )
 }
}
export default CommentForm;
