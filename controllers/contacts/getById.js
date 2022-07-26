const { createError } = require("../../helpers");
const service = require("../../service");

const getById = async (req, res, next) => {
  const { id } = req.params;
  // const result = await Contact.findOne({ _id: id });
  const result = await service.getTaskById(id);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getById;
