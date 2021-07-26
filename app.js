var express = require('express');
var app = express();
var path = require("path")
var db = require('./db');


app.use(function (req, res, next) {
  const allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'https://tommycodes-blog.herokuapp.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/userManagement', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var UserController = require('./user/UserController');
app.use('/api/users', UserController);

var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

var ProfileController = require('./profile/ProfileController');
app.use('/api/profile', ProfileController);

var EntryController = require('./blog/entry/EntryController');
app.use('/api/entry', EntryController);

module.exports = app;