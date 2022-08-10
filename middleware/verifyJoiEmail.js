const Joi = require("joi");
const { createError } = require("../helpers");

const verifyJoiEmail = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  next();
};

module.exports = verifyJoiEmail;
