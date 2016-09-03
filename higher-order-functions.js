'use strict';

function times(operation, num) {
  if (!(operation instanceof Function)) {
    throw new Error('Expected first arg to be a function');
  } else if (typeof num !== 'number') {
    throw new Error('Expected second arg to be a number');
  }

  for (var i = 0; i < num; i++) {
    operation(i);
  }
}

module.exports = times;

