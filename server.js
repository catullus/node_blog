const express = require('express'); // load express
const bodyParser = require('body-parser'); // middleware bc express can't read data from <form> element
const MongoClient = require('mongodb').MongoClient;
const app = express();

// extract data from form, add them to body of the request object
app.use(bodyParser.urlencoded({extended: true}))

// set templating engine
app.set('view engine', 'ejs')

// Handlers below:

mongodb://<dbuser>:<dbpassword>@ds019966.mlab.com:19966/starwars

var db

// setup a server that talks to a mongo database
MongoClient.connect('mongodb://hun:<password>@ds019806.mlab.com:19806/yabba-ranks', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
})

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

/* // deprecated because we are pulling index.html from the index.ejs template now
// get the HTML page index.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log('loading from', __dirname);
  // Note: __dirname is the path to your current working directory. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
});
*/

// save data submitted from form to database
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {

    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

// create an array of quotes from the .ejs template
app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
