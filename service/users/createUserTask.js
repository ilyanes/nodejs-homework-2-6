const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const createUserTask = async ({
  email,
  password,
  subscription,
  token,
  avatarURL,
  verify,
  verificationToken,
}) => {
  const hashPassword = await bcrypt.hash(password, 10);
  const gravatarURL = gravatar.url(email);
  const verifyToken = nanoid();
  return await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
    avatarURL: gravatarURL,
    verify,
    verificationToken: verifyToken,
  });
};

module.exports = createUserTask;
