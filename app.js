require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const metricRoutes = require('./routes/metric');

const app = express();

app.use(express.json());
app.use(morgan('combined'));

app.use('/metric', metricRoutes);

app.use((error, req, res, next) => {
  let status = 500;
  let msg = 'Something Went Wrong';
  const { errType } = error;
  if (errType === 'VALIDATION') {
    status = 422;
    msg = error.msg;
  }
  return res.status(status).json({ message: msg });
});

app.listen(process.env.PORT || 8080, console.log('Server Started'));
