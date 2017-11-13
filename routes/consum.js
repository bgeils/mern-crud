const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ConsumedEnergy = require('../models/consum');

// READ (ALL)
router.get('/', (req, res) => {
  ConsumedEnergy.find({}).sort({'start_time': -1}).limit(30)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

router.get('/seven', (req, res) => {
	var today = new Date();
	today.setDate(today.getDate() - 7);

  ConsumedEnergy.find({start_time:{$gte:today}}).sort({'start_time': 1}).limit(30)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});



module.exports = router;