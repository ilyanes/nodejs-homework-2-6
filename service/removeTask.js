const { Contact } = require("../models/contact");

const removeTask = (id) => {
  return Contact.findByIdAndRemove(id);
};

module.exports = removeTask;
