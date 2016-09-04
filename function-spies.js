'use strict';

/**
 * @param {Object} target
 * @param {string} method
 * @returns {Object}
 */
function spy(target, method) {
  const inputs = [];
  const originalMethod = target[method]
  const outputs = [];
  let count = 0;

  target[method] = function() => {
    count++;
    inputs.push(args);
    outputs.push(originalMethod.apply(this, arguments));

    return outputs[outputs.length - 1];
  };

  return {
    get count() {
      return count;
    }
  };
}

module.exports = spy;

