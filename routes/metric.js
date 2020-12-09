const express = require('express');

const metriController = require('../controllers/metric');
const { metricRules } = require('../Validators/metric');
const { validate } = require('../utils');
const router = express.Router();

router.get('/:key/sum', metriController.getAllVisitors);
router.post('/:key', metricRules(), validate, metriController.updateVisitors);

module.exports = router;
