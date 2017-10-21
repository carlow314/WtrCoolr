import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './commentlist';
import CommentForm from './commentform';
import LikeButton from './likebutton';
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

 <div className="allcomments">
   <div className="commentImages">
     <p>Me: “You’ll want to update your app to alleviate the issue.”</p>

      <p>Customer: “How do I do that?”</p>

      <p>Me: “Just head to the app store and search for [App].”</p>

      <p>Customer: “I’m sorry; I simply don’t have time to drive to the app store today.”</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <p>Myself and two of my coworkers were walking out of the office to get lunch. S, has a fairly large chest and M is half japanese and half irish. M, lacks any and all filters - </p>

<p>M: “So, S, have your boobs always been this big? (He asks this not in a sexual way, but as though he was legitimately curious. Like the thought literally just crossed his mind even though we have all been working together for awhile now).”</p>

<p>S: “Uh, Yes, ALWAYS. Shoot, I’d be happy with a size B. I’ve had enough of this back pain bs” (She nods her head, happy with the thought).</p>

<p>M: “Well, just so that you know - that’s still big in Asia land. </p>

<p> Oh HR …. Not really, but this is a pretty indicative of conversations in the office…. Entertaining to overhear, but so politically incorrect.</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/image.png')} />
     <p> Someone at work posted this little jem.</p>
     <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/checkflush.png')} />
     <p>It really matters.</p>
     <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <p>M: Have you ever tried wearing a shock collar?</p>
     <p>Me: Why no M, have you?</p>
     <p>M: Yes, if I had one I would bring it in so that you could try it. I think that everyone should try it once
       (please don’t bring in a shock collar, M)</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/jiminiesdead.png')} />
     <p>Cricket Lives Matter</p>
     <p>He's dead, Jim</p>
          <LikeButton />
   </div>
 </div>


<div className="allcomments">
  <div className="commentImages">
    <p>(I am a technician. I am fixing a blood pressure testing machine at the local supermarket when a man comes up wanting to have his blood pressure checked.)</p>

    <p>Me: “Sorry, I’m not quite done here. I’ll have it up and running in a few minutes.” </p>

    <p>Customer: “You aren’t really fixing that; you’re just stealing the electricity to power your laptop!”</p>

    <p>(My laptop is indeed sitting beside me, not even plugged into anything.)</p>

    <p>Me: “No, I’m not.”</p>

    <p>Customer: “Would you like me to call a manager?”</p>

    <p>Me: “Please, do it!”</p>

    <p>(He didn’t.)</p>
  </div>
</div>


 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/jiminiesdead.png')} />
     <p>Cricket Lives Matter</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/flowers.png')} />
     <p>Friends are sometimes the worst employees.</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/nameonfood.png')} />
     <p>What's mine is yours</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/shypooper.png')} />
     <p>They're watching, always watching.</p>
          <LikeButton />
   </div>
 </div>

 <div className="allcomments">
   <div className="commentImages">
     <img src={require('./images/whereareyou.png')} />
     <p>Make sure you are where you say you are. We will find you.</p>
          <LikeButton />
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
