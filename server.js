'use strict'
//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/comments');
const User = require('./models/user');
const jwt = require('express-jwt');
const env = require('dotenv').load();
//and create our instances
const port = process.env.API_PORT|| 3001;
const app = express();
const router = express.Router();


//db config
mongoose.connect('mongodb://heroku_3b10fwpg:3mrq81trelm1ci7m06o8f53iqo@ds161304.mlab.com:61304/heroku_3b10fwpg');
//we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//middleware for passport user auth

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
//now we can set the route path & initialize the API
router.get('/', function(req, res) {
    res.json({ message: 'API Initialized!'});
   });
   //adding the /comments route to our /api router
   router.route('/comments')
    //retrieve all comments from the database
    .get((req, res)=> {
    //looks at our Comment Schema
    Comment.find((err, comments)=> {
    if (err)
    res.send(err);
    //responds with a json object of our database comments.
    res.json(comments)
    });
    })
    .post((req, res)=> {
    let comment = new Comment();
    //body parser lets us use the req.body
    comment.text = req.body.text;
    comment.likes = req.body.__v;
   comment.save((err)=> {
    if (err)
    res.send(err);
    res.json({ message: 'Comment successfully added!' });
    });
    });
   
    router.route('/comments/:comment_id')
     .put((req, res)=> {
     Comment.findById(req.params.comment_id, (err, comment)=> {
     if (err)
     res.send(err);
     //setting the new author and text to whatever was changed. If 
     //nothing was changed we will not alter the field.
     (req.body.text) ? comment.text = req.body.text : null;
     (req.body.__v) ? commment.likes = req.body.__v : null;
     //save comment
     comment.save((err)=> {
     if (err)
     res.send(err);
     res.json({ message: 'Comment has been updated' });
     });
     });
     })
     //delete method for removing a comment from our database
     .delete((req, res)=> {
     //selects the comment by its ID, then removes it.
     Comment.remove({ _id: req.params.comment_id },(err, comment)=> {
     if (err)
     res.send(err);
     res.json({ message: 'Comment has been deleted' })
     })
     });
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});