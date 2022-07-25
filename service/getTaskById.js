const { Contact } = require("../models/contact");

const getTaskById = (id) => {
  return Contact.findById(id);
};

module.exports = getTaskById;
