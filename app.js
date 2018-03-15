const express = require('express');
const path = require('path');

const index = require('./routes/index');
const phones = require('./routes/phones');

const app = express();


app.use('/', index);
app.use('/phones', phones);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.send('error ' + err.status + ': ' + err.message);
});

module.exports = app;
