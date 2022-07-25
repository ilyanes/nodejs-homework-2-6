const { createError } = require("../../helpers");
const service = require("../../service");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await service.removeTask(id);
  if (!result) {
    throw createError(404);
  }
  // res.status(204).send()
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
