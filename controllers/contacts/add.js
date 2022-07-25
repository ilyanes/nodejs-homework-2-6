const { schemas } = require("../../models/contact");
const { createError } = require("../../helpers");
const service = require("../../service");

const add = async (req, res, next) => {
  const { name, email, phone, favorite } = req.body;
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await service.createTask({ name, email, phone, favorite });
  res.status(201).json(result);
};

module.exports = add;
