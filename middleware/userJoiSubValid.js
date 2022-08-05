const Joi = require("joi");
const { createError } = require("../helpers");

const userJoiSubValid = (req, res, next) => {
  const schema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  next();
};

module.exports = userJoiSubValid;
