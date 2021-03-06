const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const socket = require('socket.io');
// const OktaJwtVerifier = require('@okta/jwt-verifier');

// const oktaJwtVerifier = new OktaJwtVerifier({
//   issuer: 'https://dev-357313.oktapreview.com/oauth2/default',
//   assertClaims: {
//     aud: 'api://default',
//   },
// });

// /**
//  * A simple middleware that asserts valid access tokens and sends 401 responses
//  * if the token is not present or fails validation.  If the token is valid its
//  * contents are attached to req.jwt
//  */
// function authenticationRequired(req, res, next) {
//   const authHeader = req.headers.authorization || '';
//   const match = authHeader.match(/Bearer (.+)/);

//   if (!match) {
//     return res.status(401).end();
//   }

//   const accessToken = match[1];

//   return oktaJwtVerifier.verifyAccessToken(accessToken)
//     .then((jwt) => {
//       req.jwt = jwt;
//       next();
//     })
//     .catch((err) => {
//       res.status(401).send(err.message);
//     });
// }

const config = require('./config/db');

// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(config.db, {
  useMongoClient: true,
  /* other options */
});
let db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to the database.');
});

db.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

// Instantiate express
const app = express();

// Don't touch this if you don't know it
// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
app.enable('trust proxy');

// Set public folder using built-in express.static middleware
app.use(express.static('public'));

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!
if (process.env.CORS) {
 app.use(cors());
}

// Initialize routes middleware
app.use('/api/users', require('./routes/users'));
app.use('/api/consum', require('./routes/consum'));
app.use('/api/prod', require('./routes/prod'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/user', require('./routes/user'));

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', (req, res) => {
  res.json(req.jwt);
});

// THIS IS A SAMPLE 
app.get('/api/messages', (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
 
// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});
  
// Start the server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Set up socket.io
const io = socket(server);
let online = 0;

io.on('connection', (socket) => {
  online++;
  console.log(`Socket ${socket.id} connected.`);
  console.log(`Online: ${online}`);
  io.emit('visitor enters', online);

  socket.on('add', data => socket.broadcast.emit('add', data));
  socket.on('update', data => socket.broadcast.emit('update', data));
  socket.on('delete', data => socket.broadcast.emit('delete', data));

  socket.on('disconnect', () => {
    online--;
    console.log(`Socket ${socket.id} disconnected.`);
    console.log(`Online: ${online}`);
    io.emit('visitor exits', online);
  });
});
