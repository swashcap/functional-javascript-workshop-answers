'use strict';

function asyncRepeat(operation, num) {
  if (!num) {
    return;
  }

  setTimeout(() => {
    operation();
    return asyncRepeat(operation, --num);
  });
}

module.exports = asyncRepeat;

