'use strict';

function map(input, operation) {
  return input.reduce((memo, currentValue, index) => {
    memo[index] = operation(currentValue, index, input);
    return memo;
  }, []);
}

module.exports = map;

