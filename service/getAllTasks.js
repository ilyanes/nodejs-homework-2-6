const { Contact } = require("../models/contact");

const getAllTasks = () => {
  return Contact.find({}, "-createdAt -updatedAt");
};

module.exports = getAllTasks;
