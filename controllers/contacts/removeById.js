const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers");

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw createError(404);
  }
  // res.status(204).send()
  res.json({
    message: "Contact deleted",
  });
};

module.exports = removeById;
