const { createError } = require("../../helpers");
// const { schemas } = require("../../models/user");
const service = require("../../service/users/");

const signup = async (req, res) => {
  // const { error } = schemas.signup.validate(req.body);
  // if (error) {
  //   throw createError(400, error.message);
  // }
  const { email, password, avatarURL } = req.body;
  const user = await service.findUserTask({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const result = await service.createUserTask({
    ...req.body,
    password,
    avatarURL,
  });
  res.status(201).json({
    user: { email: result.email, subscription: result.subscription },
  });
};

module.exports = signup;
