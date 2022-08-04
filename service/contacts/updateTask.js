const { Contact } = require("../../models/contact");

const updateTask = async (id, fields) => {
  return await Contact.findByIdAndUpdate(id, fields, { new: true });
};

module.exports = updateTask;
