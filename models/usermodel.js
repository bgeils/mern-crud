const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

// Define the database model
const UserScema = new mongoose.Schema({
  uid: {
    type: String
  }
}); 

// Use the unique validator plugin
UserScema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Users = module.exports = mongoose.model('users', UserScema, 'users');
