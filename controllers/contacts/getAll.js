const service = require("../../service/contacts");

const getAll = async (req, res, next) => {
  const result = await service.getAllTasks();
  res.json(result);
};

module.exports = getAll;
