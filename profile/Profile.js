var mongoose = require('mongoose');  
var ProfileSchema = new mongoose.Schema({  
  name: String,
  surname: String,
  city: String,
  linkedUser: mongoose.Schema.Types.ObjectId
});
mongoose.model('Profile', ProfileSchema);

module.exports = mongoose.model('Profile');