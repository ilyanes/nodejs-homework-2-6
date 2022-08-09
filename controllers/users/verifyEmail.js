const { createError } = require("../../helpers");

const service = require("../../service/users");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await service.findUserVerifyToken({ verificationToken });
  if (!user) {
    throw createError(404);
  }
  await service.verifyUpdate(user.id, {
    verificationToken: "",
    verify: true,
  });
  res.json({ message: "Verification successful" });
};

module.exports = verifyEmail;
