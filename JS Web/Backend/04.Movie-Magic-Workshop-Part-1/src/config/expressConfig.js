const express = require('express');
const path = require('path');


const expressConfig = (app) => {
  //Setup static files
  app.use(express.static(path.resolve(__dirname, '../public'))) // using the path lib to resolve path files like images and css files 
  app.use(express.urlencoded({extended: false})) // Middleware to parse URL-encoded data in the body of incoming requests, typically from HTML form submissions.
};

module.exports = expressConfig;