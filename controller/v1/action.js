'use strict';

exports.health = async ctx => {
  ctx.body = 'Hi, i am sms service! env: ' + process.env.NODE_ENV;
};
