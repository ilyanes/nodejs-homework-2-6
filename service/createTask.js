const { Contact } = require("../models/contact");

const createTask = ({ name, email, phone, favorite }) => {
  return Contact.create({ name, email, phone, favorite });
};

module.exports = createTask;
