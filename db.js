require('dotenv').config();

var mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.zihek.mongodb.net/tommycodes?retryWrites=true&w=majority`;
mongoose.connect(uri);