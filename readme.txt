resources

// main blog: http://zellwk.com/blog/crud-express-mongodb/

// a similar tutorial: http://www.clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus

https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

// for nodemon setup (constantly refresh server to browser automatically)
https://shapeshed.com/creating-a-basic-site-with-node-and-express/

// cmd>>
npm init // in folder

// cmd>>
echo $null >> server.js // create server file in windows (touch server.js on unix)

// in the new server.js txt file add:
// txt>>
console.log("basic message");

// in the cmd, this server can be executed via
// cmd>>
node server.js

// install express to the folder
// cmd>>
npm install express --save

// install nodemon for constant server refresh
// cmd>>
npm install -g nodemon

// save nodemon to your package.json file dependencies
// npm install nodemon --save-dev

// activate server.js now with nodemon rather than node e.g.
// cmd>>
nodemon server.js

// require express in the server.js file
//txt>>
const express = require('express');
const app = express();
app.listen(3000, function() {
  console.log('listening on 3000')
})

// activate local server with
// cmd>>
node server.js

// kill server in command line:
// ctrl + C

// open page in your browser
//browser url>> localhost:3000

// how to find and kill localhost process (if it keeps running)
// cmd >>
netstat -a -o -n
// find which PID is on 3000
taskkill /pid 5440 // if PID is 5440

// add body-parser library to help express handle html form data
// cmd>>
npm install body-parser --save

// incorporate body parser into server.js
// txt >>
app.use(bodyParser.urlencoded({extended: true}))
