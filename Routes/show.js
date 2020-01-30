const express = require('express');
const database = require('../config');


const showRouter = express.Router();


showRouter.post('/', (req, res) => {
  const {city, date} = req.body;
  console.log(req.body, city);
  if (!city || !date) {
    res.status(400).send('Missing an input field !');
  } else {
    // Problème de nommage "show"
    // Mettre des 'quotes' ` pour show fonctionne
    // https://www.developpez.net/forums/d658447/php/php-base-donnees/erreur-incomprehensible-sqlstate-42000-syntax-error-or-access-violation-1064-a/#post3864708
    database.query(`INSERT INTO \`show\` (city, date) VALUES (?, ?)`, [city, date], (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        throw err;
      } else {
        res.status(200).send(req.body);
      }
    });
    res.status(400);
  }
});


showRouter.get('/', (req, res) => {
  database.query(`SELECT * FROM \`show\``, (err, results) => {
    if (err) {
      res.status(500).send('Cannot find shows');
    } else {
      res.status(200).json(results);
    }
  });
});

showRouter.put('/:id', (req, res) => {
  const { city, date } = req.body;
  const itemId = res.req.params.id;
  if (!city || !date) {
    res.status(400).send('Missing an input field !');
  } else {
    database.query(`SELECT id FROM \`show\` WHERE id = ${itemId}`, (err, row) => {
      if (err) {
        res.sendStatus(400);
        throw err;
      } else if (row.length <= 0) {
        res.status(400).send('There is no item with this id !');
      } else {
        database.query(`UPDATE \`show\` SET city = '${city}', date = '${date}' WHERE id = ${itemId}`, (err) => {
          if (err) {
            res.sendStatus(400);
            throw err;
          } else {
            res.status(200).send('Show successfuly modified in the database !');
          }
        });
      }
    });
  }
});

showRouter.delete('/:id', (req, res) => {
  const itemId = res.req.params.id;
  database.query(`SELECT id FROM \`show\` WHERE id = ${itemId}`, (err, row) => {
    if (err) {
      res.sendStatus(400);
      throw err;
    } else if (row.length <= 0) { // RETURNS AN ERROR IF NO ITEM HAS THE SELECTED ID
      res.status(400).send('There is no item with this id !');
    } else {
      database.query(`DELETE FROM \`show\` WHERE id = ${itemId}`, (err) => {
        if (err) {
          res.sendStatus(400);
          throw err;
        } else {
          res.status(200).send('Show successfuly deleted from the database !');
        }
      });
    }
  });
});


module.exports = showRouter;