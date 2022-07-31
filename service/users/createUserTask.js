const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");

const createUserTask = ({ fields, password }) => {
  const hashPassword = bcrypt.hash(password, 10);
  return User.create({
    ...fields,
    password: hashPassword,
  });
};

module.exports = createUserTask;
