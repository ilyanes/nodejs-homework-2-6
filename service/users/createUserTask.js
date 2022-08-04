const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const createUserTask = async ({ email, password, subscription, token }) => {
  const hashPassword = await bcrypt.hash(password, 10);
  return await User.create({
    email,
    password: hashPassword,
    subscription,
    token,
  });
};

module.exports = createUserTask;
