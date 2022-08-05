const { User } = require("../../models/user");

const findByIdToken = async (id, token) => {
  return await User.findByIdAndUpdate(id, token);
};

module.exports = findByIdToken;
