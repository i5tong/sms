'use strict';

module.exports = {

  port: 7001,

  sms: {
    appid: 1234567890,
    appkey: 'key',
  },

  mongodb: {
    pandora: {
      host: 'mongodb-1.pandora:3717,mongodb-2.pandora:3717',
      dbName: 'pandora-en',
      userName: 'root',
      password: 'Qingclass123',
      authSource: 'admin',
      replicaSet: 'mgset-8793355',
    },
    pay: {
      host: 'mongodb-1.pandora:3717,mongodb-2.pandora:3717',
      dbName: 'pay',
      userName: 'root',
      password: 'Qingclass123',
      authSource: 'admin',
      replicaSet: 'mgset-8793355',
    },
  },

  redis: {
    host: 'redis.pandora',
    port: 6379,
    password: 'Redis123',
    db: 0,
  },
};
