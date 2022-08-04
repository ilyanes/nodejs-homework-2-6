const { User } = require("../../models/user");

const editSubscription = async (id, value) => {
  return await User.findByIdAndUpdate(id, value, { new: true });
};
module.exports = editSubscription;
