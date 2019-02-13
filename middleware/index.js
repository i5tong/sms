'use strict';

const compose = require('koa-compose');
const errHandler = require('./errHandler').errHandler;

exports.middleware = function() {
  return compose(
    [
      errHandler(),
    ]
  );
};
