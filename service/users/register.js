const { createError } = require("../../helpers");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const register = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (user) {
    throw createError(409, "Email in use");
  }
  const hashPassword = bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashPassword });
  return newUser;
};

module.exports = register;

// const signup = async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await service.findUserTask({ email });
//   if (user) {
//     throw createError(409, "Email in use");
//   }

//   const hashPassword = await bcrypt.hash(password, 10);
//   const result = service.createUserTask({
//     ...req.body,
//     password: hashPassword,
//   });

//   // res.status(201).json(result);
//   res.status(201).json({
//     email: result.email,
//     subscription: result.subscription,
//   });

//   // const newUser = await register(email, password);
//   // return res.json({ status: "succes", code: 201, data: newUser });
// };
