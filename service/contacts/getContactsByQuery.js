const { Contact } = require("../../models/contact");

const getContactsByQuery = async (prop) => {
  const result = await Contact.find({ [prop]: true }).populate(
    "owner",
    "email subscription"
  );

  return result;
};

module.exports = getContactsByQuery;
