const { validationResult } = require('express-validator');

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
  } else {
    return next({ errType: 'VALIDATION', ...errors.errors[0] });
  }
};
