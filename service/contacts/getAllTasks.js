const { Contact } = require("../../models/contact");

const getAllTasks = async (owner, skip, limit) => {
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email subscription");

  return result;
};

module.exports = getAllTasks;
