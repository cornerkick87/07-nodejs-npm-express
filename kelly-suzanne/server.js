'use strict';

//TODO: Finish out the server code according to the instructions in the lab README

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// RESPONSE: This is the middleware that translates between server and filesystem/database. Our files are in a public directory because the public files do not need to be protected like the database ones. ExpressJS serves our local files by looking up the files in the order which we set the static directories.
app.use(express.static('./public'));

app.get('/postnewarticle', (request, response) => {
  console.log('We got a request at /postnewarticle and will send the user to new.html');
  response.sendFile('public/new.html', { root: '.' });
});

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
})

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));