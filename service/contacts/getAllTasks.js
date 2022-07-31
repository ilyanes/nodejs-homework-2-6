const { Contact } = require("../../models/contact");

const getAllTasks = (req) => {
  const { id: owner } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  return Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email subscription");
};

module.exports = getAllTasks;
