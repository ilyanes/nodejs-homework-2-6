const { createError, sendEmail } = require("../../helpers");
// const { schemas } = require("../../models/user");
const service = require("../../service/users/");

const signup = async (req, res) => {
  // const { error } = schemas.signup.validate(req.body);
  // if (error) {
  //   throw createError(400, error.message);
  // }
  const { email, password, avatarURL, verificationToken } = req.body;
  const user = await service.findUserTask({ email });
  if (user) {
    throw createError(409, "Email in use");
  }

  const result = await service.createUserTask({
    ...req.body,
    password,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${verificationToken}">Нажмите для подтверждения регистрации</a>`,
  };
  await sendEmail(mail);
  await res.status(201).json({
    user: { email: result.email, subscription: result.subscription },
  });
};

module.exports = signup;
