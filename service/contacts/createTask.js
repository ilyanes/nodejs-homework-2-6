const { Contact } = require("../../models/contact");

const createTask = async ({ name, email, phone, favorite, owner }) => {
  // const createTask = async ({ name, email, phone, favorite, _id }) => {
  return await Contact.create({ name, email, phone, favorite, owner });
  // return await Contact.create({ name, email, phone, favorite, owner: _id });
};

module.exports = createTask;
