var blacklist = {
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};

module.exports = function(event, invokeOnInputs) {
  return event.keyCode == 17 || (!invokeOnInputs && blacklist[event.target.tagName]);
};
