'use strict';

const extend = require('extend');
const env = process.env.NODE_ENV || 'dev';
const defaultConfig = require('./defult');
const envConfig = require(`./${env}`);
module.exports = extend(true, {}, defaultConfig, envConfig);
