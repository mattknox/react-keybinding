var blacklist = {
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};

module.exports = function(event, targetInputs) {
  return targetInputs && blacklist[event.target.tagName];
};
