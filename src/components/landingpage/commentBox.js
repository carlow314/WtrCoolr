import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './commentlist';
import CommentForm from './commentform';
import style from '../style';
import styles from './comment.css';


class CommentBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
 this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
 this.handleCommentDelete = this.handleCommentDelete.bind(this);
 this.handleCommentUpdate = this.handleCommentUpdate.bind(this);
 }
 loadCommentsFromServer() {
 axios.get(this.props.url)
 .then(res => {
 this.setState({ data: res.data });
 })
 }
 handleCommentSubmit(comment) {
 let comments = this.state.data;
 comment.id = Date.now();
 let newComments = comments.concat([comment]);
 this.setState({ data: newComments });
 axios.post(this.props.url, comment)
 .catch(err => {
 console.error(err);
 this.setState({ data: comments });
 });
 }
 handleCommentDelete(id) {
 axios.delete(`${this.props.url}/${id}`)
 .then(res => {
 console.log('Comment deleted');
 })
 .catch(err => {
 console.error(err);
 });
 }
 handleCommentUpdate(id, comment) {
 //sends the comment id and new text to our api
 axios.put(`${this.props.url}/${id}`, comment)
 .catch(err => {
 console.log(err);
 })
 }
 componentDidMount() {
 this.loadCommentsFromServer();
 setInterval(this.loadCommentsFromServer, 2000);
 }
 render() {
 return (
   <div className="container commentformBox">

 <div style={ style.commentBox }>
 <h2 style={ style.title }></h2>
 <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>

 <div className="dropdown">
   <button className="btn btn-secondary dropdown-toggle dropdownBtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
     SORT BY
   </button>
   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <a className="dropdown-item" href="#">Most Popular</a>
     <a className="dropdown-item" href="#">Hillarious</a>
     <a className="dropdown-item" href="#">F**ed Up</a>
   </div>
 </div>

 <CommentList
 onCommentDelete={ this.handleCommentDelete }
 onCommentUpdate={ this.handleCommentUpdate }
 data={ this.state.data }/>
 </div>
 </div>
 )
 }
}
export default CommentBox;
