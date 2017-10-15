import React, { Component } from 'react';
import style from '../style';
import marked from 'marked';
import LikeButton from './likebutton';

class Comment extends Component {
 constructor(props) {
 super(props);
 this.state= {
 toBeUpdated: false,
 text: ''
 };
 //binding all our functions to this class
 this.deleteComment = this.deleteComment.bind(this);
 this.updateComment = this.updateComment.bind(this);
 this.handleTextChange = this.handleTextChange.bind(this);
 this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
 }
 updateComment(e) {
 e.preventDefault();
 //brings up the update field when we click on the update link.
 this.setState({ toBeUpdated: !this.state.toBeUpdated });
 }
 handleCommentUpdate(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 //if author or text changed, set it. if not, leave null and our PUT
 //request will ignore it.
 let text = (this.state.text) ? this.state.text : null;
 let comment = {text: text};
 this.props.onCommentUpdate(id, comment);
 this.setState({
 toBeUpdated: !this.state.toBeUpdated,
 text: ''
 })
 }
 deleteComment(e) {
 e.preventDefault();
 let id = this.props.uniqueID;
 this.props.onCommentDelete(id);
 console.log('oops deleted');
 }
 handleTextChange(e) {
 this.setState({ text: e.target.value });
 }
 rawMarkup() {
 let rawMarkup = marked(this.props.children.toString());
 return { __html: rawMarkup };
 }
 render() {
 return (
 <div style={ style.comment }>
 <span dangerouslySetInnerHTML={ this.rawMarkup() } />
 <button onClick={ this.updateComment }>update</button>
 <button onClick={ this.deleteComment }>delete</button>
 <LikeButton/>
 { (this.state.toBeUpdated)
 ? (<form onSubmit={ this.handleCommentUpdate }>
 <input
 type='text'
 placeholder='Update your comment…'
 style= { style.commentFormText }
 value={ this.state.text }
 onChange={ this.handleTextChange } />
 <input
 type='submit'
 style={ style.commentFormPost }
 value='Update' />
 </form>)
 : null}
 </div>
 )
 }
}
export default Comment;
