const { Contact } = require("../../models/contact");

const createTask = ({ fields, owner }) => {
  return Contact.create({ ...fields, owner });
};

module.exports = createTask;
