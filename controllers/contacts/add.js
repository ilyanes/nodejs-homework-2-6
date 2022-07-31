const { schemas } = require("../../models/contact");
const { createError } = require("../../helpers");
const service = require("../../service/contacts");

const add = async (req, res, next) => {
  // const { name, email, phone, favorite } = req.body;
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  console.log(req.user);
  const { id: owner } = req.user;
  const result = await service.createTask({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = add;
