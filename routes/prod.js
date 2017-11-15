const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ProdEnergy = require('../models/prod');

// READ (ALL)
router.get('/', (req, res) => {
  ProdEnergy.find({}).sort({'start_time': -1}).limit(30)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

module.exports = router;