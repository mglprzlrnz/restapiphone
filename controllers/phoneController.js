const express = require('express');
const phonesmocks = require('../mocks/phones');


module.exports.getAll = (req, res, next) => {
  res.send(phonesmocks);
}
