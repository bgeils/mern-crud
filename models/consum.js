const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');


// Define the database model
const ConsumeSchema = new mongoose.Schema({
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
ConsumeSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const ConsumedEnergy = module.exports = mongoose.model('consum', ConsumeSchema, 'consum');
