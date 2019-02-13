'use strict';

const KoaRouter = require('koa-router');
const controller = require('../controller/v1');

const router = new KoaRouter({
  prefix: '/v1',
});

router.get('/health', controller.action.health);
router.post('/single', controller.sms.smsSingleSender);
router.post('/multi', controller.sms.smsMultiSender);

exports = module.exports = router;
