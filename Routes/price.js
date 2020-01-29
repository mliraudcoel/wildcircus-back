const express = require('express');
const database = require('../config');


const priceRouter = express.Router();

priceRouter.get('/', (req, res) => {
  database.query('SELECT id, name, adult_price, child_price, group_price, school_price FROM price', (err, results) => {
    if (err) {
      res.status(500).send('Cannot find prices');
    } else {
      res.status(200).json(results);
    }
  });
});


module.exports = priceRouter;