module.exports = function (goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser === submittedUser;
      });
    });
  };
};
