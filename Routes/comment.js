const express = require('express');
const database = require('../config');

const commentRouter = express.Router();


commentRouter.post('/', (req, res) => {
  const { pseudo, comment } = req.body;
  console.log(req.body)
  if (!pseudo, !comment) {
    res.status(400).send('Some fields are missing');
  } else {
        database.query(`INSERT INTO comment (pseudo, comment) VALUES (?, ?)`, [pseudo, comment], (error) => {
          if (error) {
            res.sendStatus(500);
            throw error;
          } else {
            res.status(200).send(req.body);
          }
        });
      }
    res.status(400);
  });

  commentRouter.get('/', (req, res) => {
    database.query(`SELECT * FROM comment`, (err, results) => {
      if (err) {
        res.status(500).send('error');
        throw err;
      } else {
        res.json(results);
      }
    });
  });


  module.exports = commentRouter;