import React, { Component } from 'react';
import style from '../style';
import Emoji from './emojipicker';


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
 <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
 <input
 type='text'
 placeholder='Say something…'
 style={ style.commentFormText}
 value={ this.state.text || this.state.emoji}
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.commentFormPost }
 value='Post'/>
 </form>
 )
 }
}
export default CommentForm;