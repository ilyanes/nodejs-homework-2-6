const { User } = require("../../models/user");

const findByIdAvatar = async (id, avatarURL) => {
  return await User.findByIdAndUpdate(id, avatarURL);
};

module.exports = findByIdAvatar;
