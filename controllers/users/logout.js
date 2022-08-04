// const { User } = require("../../models/user");
const service = require("../../service/users");

const logout = async (req, res) => {
  const { _id } = req.user;
  await service.findByIdToken(_id, { token: "" });
  res.status(204).send();
};

module.exports = logout;
