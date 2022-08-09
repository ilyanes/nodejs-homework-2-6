const { User } = require("../../models/user");

const findUserVerifyToken = async ({ verificationToken }) => {
  return await User.findOne({ verificationToken });
};

module.exports = findUserVerifyToken;
