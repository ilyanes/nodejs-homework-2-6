const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const createUserTask = async ({
  email,
  password,
  subscription,
  token,
  avatarURL,
}) => {
  const hashPassword = await bcrypt.hash(password, 10);
  const gravatarURL = gravatar.url(email);
  return await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
    avatarURL: gravatarURL,
  });
};

module.exports = createUserTask;
