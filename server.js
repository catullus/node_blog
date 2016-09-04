const express = require('express');
const app = express();

// setup listener at local host port 3000
app.listen(3000, function() {
  console.log('listening on 3000')
});

/*
// return the following package e.g. text
app.get('/', function(req, res) {
  res.send('Hello World')
})
// Note: request and response are usually written as req and res respectively.
*/
/*
// altnerative ES6 way to write the get
app.get('/', (req, res) => {
  res.send('hello world')
})
*/

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log('loading from', __dirname);
  // Note: __dirname is the path to your current working directory. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});
