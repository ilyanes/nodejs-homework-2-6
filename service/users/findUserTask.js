const { User } = require("../../models/user");

const findUserTask = async ({ email }) => {
  return await User.findOne({ email });
};

module.exports = findUserTask;
