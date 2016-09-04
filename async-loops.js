'use strict';

/**
 * @param {number[]} userIds
 * @param {Function} load
 * @param {Function} done Callback
 */
function loadUsers(userIds, load, done) {
  const userCount = userIds.length;
  const users = new Array(userCount);
  let loaded = 0;
  let isError = false;

  userIds.forEach((userId, index) => {
    load(userId, (error, user) => {
      if (!isError) {
        if (error) {
          isError = true;
          done(error);
        } else {
          loaded++;
          users[index] = user;

          if (loaded === userCount) {
            done(null, users);
          }
        }
      }
    });
  });
}

module.exports = loadUsers;

