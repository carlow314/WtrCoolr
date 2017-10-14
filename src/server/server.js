// require('dotenv').config({path: './config/.env'}); //Setting up our own environment
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
