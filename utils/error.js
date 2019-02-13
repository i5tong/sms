'use strict';

exports.createError = (msg, errCode = 40000, statusCode = 400) => {
  const err = msg instanceof Error ? msg : new Error(msg);
  err.errCode = errCode;
  err.statusCode = statusCode;
  return err;
};
