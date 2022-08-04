const { schemas } = require("../../models/contact");
const { createError } = require("../../helpers");
const service = require("../../service/contacts/");

const add = async (req, res, next) => {
  // const { _id } = req.user;
  const { _id: owner } = req.user;
  // console.log(_id);
  const { name, email, phone, favorite } = req.body;
  const { error } = schemas.add.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const result = await service.createTask({
    name,
    email,
    phone,
    favorite,
    owner,
  });
  // const result = await service.createTask({
  //   name,
  //   email,
  //   phone,
  //   favorite,
  //   _id,
  // });
  res.status(201).json(result);
};

module.exports = add;
