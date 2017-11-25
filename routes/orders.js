const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const BuyOrders = require('../models/buy_order');

// READ (ALL)
router.get('/', (req, res) => {
  BuyOrders.find({}).limit(10)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

module.exports = router;