var app = require('./app');
require('dotenv').config();
var port = process.env.PORT || 3001;

console.log("the port!:", process.env.PORT)

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});