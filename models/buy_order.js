const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

// Define the database model
const BuyOrderSchema = new mongoose.Schema({
  price: {
    type: Number
  },
  insert_date: {
    type: Date,
    required: [true, 'Date is required.']
  },
  userid: {
    type: String
  },
  power: {
    type: Number
   }
}); 

// Use the unique validator plugin
BuyOrderSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const BuyOrders = module.exports = mongoose.model('buy_order', BuyOrderSchema, 'buy_order');
