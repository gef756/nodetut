function loadUsers(userIds, load, done) {
  var processed = 0;
  var users = [];
  userIds.forEach(function (id, index) {
    load(id, function(user) {
      users[index] = user;
      processed++;
      if (processed === userIds.length) {
        return done(users);
      }
    });
  });
  return users;
}

module.exports = loadUsers;
