const service = require("../../service/contacts");

const getAll = async (req, res) => {
  console.log(req.query);
  if (req.query.favorite) {
    // const { favorite = true } = req.query;
    // const { id: owner } = req.user;
    const result = await service.getContactsByQuery("favorite");
    return res.json(result);
  }
  const { id: owner } = req.user;
  const { page = 1, limit = 15 } = req.query;
  const skip = (page - 1) * limit;
  const result = await service.getAllTasks(owner, skip, limit);

  return res.json(result);
};

module.exports = getAll;
