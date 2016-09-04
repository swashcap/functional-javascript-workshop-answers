'use strict';

function duckCount(...args) {
  return args.reduce((quackCount, arg) => {
    return Object.prototype.hasOwnProperty.call(arg, 'quack') ?
      quackCount + 1 :
      quackCount;
  }, 0);
}

module.exports = duckCount;

