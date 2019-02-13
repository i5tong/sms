'use strict';

const logger = require('../libs/logger').logger('errHandler');

exports.errHandler = () => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    logger.error('SMS ERROR : ', err);
    ctx.status = err.status || 500;
    ctx.body = {
      code: err.errCode || 'unknow',
      message: err.message || 'unknow',
    };
  }
};
