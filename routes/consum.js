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

router.get('/agg/:num', (req, res) => {
  let num_days = parseInt(req.params.num)
	var search_date = new Date();
	search_date.setDate(search_date.getDate() - search_date);

  ConsumedEnergy.aggregate([
    { "$match": {
        "start_time": { "$gte": search_date }
    }},
    { "$group": {
        "_id": null,
        "power": { "$avg": "$power" }
    }}
])
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ success: false, msg: `Something went wrong. ${err}` });
    });
});

module.exports = router;