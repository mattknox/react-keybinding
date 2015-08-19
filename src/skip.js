var blacklist = {
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};

module.exports = function(event, invokeOnInputs) {
  return !invokeOnInputs && blacklist[event.target.tagName];
};
