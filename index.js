// index.js
// where your node app starts
// Astro: npm run start

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// Task 2:
// Ref: https://medium.com/@ryan_forrester_/get-ip-address-in-javascript-how-to-guide-13c91383b33f#:~:text=2.%20Server%2DSide%20IP%20Retrieval%20with%20Node.js
app.get('/api/whoami', function (req, res) {
  const ip = req.connection.remoteAddress;
  const lang = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  console.log("Step One, Two and Three:", { ipaddress: ip, language: lang, software: software });
  res.json({ ipaddress: ip, language: lang, software: software });
});

/* 
Took out
req.headers['x-forwarded-for']
req.headers['forwarded'] ||
*/

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
