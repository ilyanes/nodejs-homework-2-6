const { Contact } = require("../../models/contact");

const updateTask = (id, fields) => {
  return Contact.findByIdAndUpdate(id, fields, { new: true });
};

module.exports = updateTask;
