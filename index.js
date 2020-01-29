const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const performanceRouter = require('./Routes/performance');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/', performanceRouter);

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`API listening on ${port}`);
  }
});