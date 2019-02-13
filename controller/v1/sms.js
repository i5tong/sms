'use strict';

const logger = require('../../libs/logger').logger('controller.sms');

/**
 * 单条发送
 * @param {Object} ctx 上下文
 */
exports.smsSingleSender = async ctx => {
  const data = ctx.request.body;
  logger.info('单条发送参数', data);
  const { phone, templateId, params } = data;
  await ctx.service.sms.smsSingleSender(phone, templateId, params);
  ctx.body = { msg: 'success' };
};

/**
 * 多条发送
 * @param {Object} ctx 上下文
 */
exports.smsMultiSender = async ctx => {
  const data = ctx.request.body;
  logger.info('多条发送参数', data);
  const { phones, templateId, params } = data;
  await ctx.service.sms.smsMultiSender(phones, templateId, params);
  ctx.body = { msg: 'success' };
};
