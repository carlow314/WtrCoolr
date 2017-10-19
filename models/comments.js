'use strict';
//import dependency
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
let CommentsSchema = new Schema({
 text: String,
 author:String,
 likes: { type: Number, default: 0 }
});
//export our module to use in server.js
module.exports = mongoose.model('Comment', CommentsSchema);