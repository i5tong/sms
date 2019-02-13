'use strict';

const log4js = require('log4js');

const logLayout = {
  type: 'pattern',
  pattern: '%h %x{pid} [%d] [%p] %c > %m',
  tokens: {
    pid() {
      return process.pid;
    },
  },
};

log4js.configure({
  appenders: {
    out: {
      type: 'console',
      layout: logLayout,
    },
  },
  categories: {
    default: {
      appenders: [ 'out' ],
      level: 'info',
    },
  },
});

exports.logger = function getLogger(moduleName) {
  const l = log4js.getLogger(moduleName);
  return l;
};
