const Visitors = require('../service');

exports.getAllVisitors = (req, res) => {
  const { key } = req.params;
  return res.status(200).json({
    data: {
      sum: Visitors.getValue(key),
    },
    message: '',
  });
};
exports.updateVisitors = (req, res) => {
  const { value } = req.body;
  const { key } = req.params;
  Visitors.addValue(key, value);
  return res.status(200).json({
    data: {},
    message: 'Successfully Updated.',
  });
};
