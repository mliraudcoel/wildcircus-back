const express = require('express');
const database = require('../config');


const performanceRouter = express.Router();

performanceRouter.get('/', (req, res) => {
  database.query('SELECT id, title, description FROM performance', (err, results) => {
    if (err) {
      res.status(500).send('Cannot find performances');
    } else {
      res.status(200).json(results);
    }
  });
});




module.exports = performanceRouter;
