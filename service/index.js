data = {};

function subtract(key, value) {
  setTimeout(() => {
    data[key] = data[key] - value;
    if (data[key] === 0) delete data[key];
  }, process.env.EXPIRE_TIME);
}

// return 0 if key is not found in data object
exports.getValue = (key) => {
  return data[key] ? Math.round(data[key]) : 0;
};

// check if key already exist if not create new key
// then add value to data[key]
// set a timeout, after timeout the value will be subtracted from data[key]
// after subtraction, if data[key] is 0, then delete data[key]
exports.addValue = (key, value) => {
  value = Number(value);
  data[key] = (data[key] ? data[key] : 0) + value;
  subtract(key, value);
};
