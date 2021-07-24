var mongoose = require("mongoose");
var ProfileSchema = new mongoose.Schema({
  title: String,
  content: String,
  linkedUser: mongoose.Schema.Types.ObjectId,
  time: { type: Date, default: Date.now },
});
mongoose.model("Entry", ProfileSchema);

module.exports = mongoose.model("Entry");
