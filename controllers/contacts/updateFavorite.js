const { schemas } = require("../../models/contact");
const { createError } = require("../../helpers");
const service = require("../../service/contacts");

const updateFavorite = async (req, res, next) => {
  const { error } = schemas.updateFavorite.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }
  const { id } = req.params;
  const result = await service.updateTask(id, req.body, { new: true });
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateFavorite;
