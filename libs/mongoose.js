'use strict';

const mongoose = require('mongoose');
const config = require('../config');
const Promise = require('bluebird');
const logger = require('./logger').logger('mongoose');
mongoose.Promise = Promise;

const dbs = {};
const mongodbConfig = config.mongodb;

for (const clientName in mongodbConfig) {
  const { host = 'localhost', dbName, userName, password, authSource, replicaSet } = mongodbConfig[clientName];
  let connectionStr = 'mongodb://';
  if (userName) {
    connectionStr += `${userName}:${password}@`;
  }
  connectionStr += `${host}/${dbName}?replicaSet=${replicaSet}`;
  if (authSource) {
    connectionStr += `&authSource=${authSource}`;
  }
  logger.info('mongodb connect:', connectionStr);
  const db = mongoose.createConnection(connectionStr);
  dbs[clientName] = db;
  db.on('error', error => logger.error(error))
    .on('close', () => logger.info('Database connection closed.'))
    .on('open', () => {
      logger.info(`DB ${connectionStr} connected !`);
    });
}

module.exports = dbs;
