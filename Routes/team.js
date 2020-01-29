const express = require('express');
const database = require('../config');


const teamRouter = express.Router();

teamRouter.get('/', (req, res) => {
  database.query('SELECT id, name, picture FROM team', (err, results) => {
    if (err) {
      res.status(500).send('Cannot find team');
    } else {
      res.status(200).json(results);
    }
  });
});


module.exports = teamRouter;