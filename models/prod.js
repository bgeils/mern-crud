const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

// Define the database model
const ProdSchema = new mongoose.Schema({
  device_id: {
    type: String
  },
  start_time: {
    type: Date,
    required: [true, 'Date is required.']
  },
  duration: {
    type: Number
  },
  energy: {
    type: Number
   }
}); 

// Use the unique validator plugin
ProdSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const ProdEnergy = module.exports = mongoose.model('prod', ProdSchema, 'prod');
