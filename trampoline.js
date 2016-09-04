'use strict';

function repeat(operation, num) {
  return function doRepeat() {
    if (num) {
      operation();
      return repeat(operation, --num);
    }
  };
}

function trampoline(fn) {
  while (fn && fn instanceof Function) {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(null, operation, num));
};

