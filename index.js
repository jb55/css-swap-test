// from jquery/src/core/swap.js

module.exports = function(elem, options, cb) {
  var ret, name, old = {};

  // Remember the old values, and insert the new ones
  for (name in options) {
    old[name] = elem.style[name];
    elem.style[name] = options[name];
  }

  ret = callback(elem);

  // Revert the old values
  for (name in options) {
    elem.style[name] = old[name];
  }

  return ret;
};
