const { check } = require('express-validator');

exports.metricRules = () => {
  return [check('value').isInt({ min: 0, gt: 0 }).withMessage('Inavlid Input')];
};
