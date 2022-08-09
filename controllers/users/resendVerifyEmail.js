const { createError, sendEmail } = require("../../helpers");

const service = require("../../service/users/");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await service.findUserTask({ email });
  if (!user) {
    throw createError(404);
  }
  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }
  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${user.verificationToken}">Нажмите для подтверждения регистрации</a>`,
  };
  await sendEmail(mail);
  res.json({ message: "Verification email sent" });
};

module.exports = resendVerifyEmail;
