'use strict';

const QcloudSms = require('qcloudsms_js');
const logger = require('../libs/logger').logger('sms:service.sms');
const config = require('../config');

const appid = config.sms.appid;
const appkey = config.sms.appkey;
const smsSign = '签名';

// 实例化QcloudSms
const qcloudsms = QcloudSms(appid, appkey);

/**
 * 请求回调处理
 * @param {Error} err 错误
 * @param {Request} res 请求
 * @param {Object} resData 响应
 */
const callback = async (err, res, resData) => {
  if (err) {
    logger.error(err);
  } else {
    logger.info('response data: ', resData);
    if (resData.result !== 0) {
      logger.error(resData.errmsg);
    }
  }
};

/**
 * sms 单条发送
 * @param {String} phone 手机号
 * @param {Number} templateId 模板id
 * @param {Array} params 参数
 */
exports.smsSingleSender = async (phone, templateId, params) => {

  const singleSender = qcloudsms.SmsSingleSender();
  singleSender.sendWithParam(86, phone, templateId, params, smsSign, '', '', callback);
};

/**
 * sms 多条发送
 * @param {Array} phones 手机号
 * @param {Number} templateId 模板id
 * @param {Array} params 参数
 */
exports.smsMultiSender = async (phones, templateId, params) => {

  const multiSender = qcloudsms.SmsMultiSender();
  multiSender.sendWithParam(86, phones, templateId, params, smsSign, '', '', callback);
};
