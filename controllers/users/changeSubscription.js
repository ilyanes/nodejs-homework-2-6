const { createError } = require("../../helpers");
const service = require("../../service/users");

const changeSubscription = async (req, res) => {
  const { _id } = req.user;

  const user = await service.editSubscription(_id, req.body, { new: true });
  if (!user) {
    throw createError(401);
  }
  res.json({ email: user.email, subscription: user.subscription });
};

module.exports = changeSubscription;
