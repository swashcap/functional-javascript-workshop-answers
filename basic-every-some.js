'use strict';

function checkUsersValid(goodUsers) {
  const goodUsersIds = goodUsers.map(u => u.id);

  return function testAllValid(users) {
    return users.some(u => goodUsersIds.indexOf(u.id) < 0);
  };
}

module.exports = checkUsersValid;
