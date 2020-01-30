const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const performanceRouter = require('./Routes/performance');
const priceRouter = require('./Routes/price');
const teamRouter = require('./Routes/team');
const showRouter = require('./Routes/show');
const commentRouter = require('./Routes/comment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use('/performances', performanceRouter);
app.use('/prices', priceRouter);
app.use('/teams', teamRouter);
app.use('/shows', showRouter);
app.use('/comments', commentRouter);

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`API listening on ${port}`);
  }
});