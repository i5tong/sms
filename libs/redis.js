'use strict';

const redis = require('redis');
const Promise = require('bluebird');
const config = require('../config').redis;
const logger = require('./logger').logger('redis');

let client = redis.createClient(config);
client = Promise.promisifyAll(client);
client.on('ready', () => { logger.info('redis connenct success'); })
  .on('error', error => { logger.error('redis connect error', config, error); })
  .on('end', () => { logger.info('redis connnect closed'); });
module.exports = client;
