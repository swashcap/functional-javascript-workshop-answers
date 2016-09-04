'use strict';

function reduce(arr, fn, init) {
  function _reduce(index, value) {
    return index === arr.length ?
      value :
      _reduce(index + 1, fn(value, arr[index], index, arr));
  }

  return _reduce(0, init);
}

module.exports = reduce;

