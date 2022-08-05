const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const service = require("../../service/users");

const { createError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await service.findUserTask({ email });
  if (!user) {
    throw createError(401, "Email  is wrong");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Password is wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await service.findByIdToken(user._id, { token });
  res.json({
    token,
    user: { email, subscription: user.subscription },
  });
};

module.exports = login;

// const decodeToken = jwt.decode(token);
