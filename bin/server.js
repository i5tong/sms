'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const ApiRoutes = require('../router/apis');
const config = require('../config');
const Service = require('../service');
const middleware = require('../middleware').middleware;
const logger = require('../libs/logger').logger('sms');

const app = new Koa();

app.use(bodyParser());

try {
  app.use(async (ctx, next) => {
    ctx.service = Service;
    await next();
  })
    .use(middleware())
    .use(ApiRoutes.routes());
} catch (e) {
  logger.error('Start server failed => ', e);
}

app.listen(config.port, () => {
  logger.info(`Server started on ${config.port}`);
});

app.on('error', function(err) {
  logger.error(err);
});

exports = module.exports = app;
