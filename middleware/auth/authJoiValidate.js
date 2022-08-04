const Joi = require("joi");
const { createError } = require("../../helpers");

const authJoiValidate = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    subscription: Joi.string(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  next();
};

module.exports = authJoiValidate;
