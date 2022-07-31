const { User } = require("../../models/user");

const findUserTask = ({ email }) => {
  return User.findOne({ email });
};

module.exports = findUserTask;
