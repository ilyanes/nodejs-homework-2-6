const { User } = require("../../models/user");

const verifyUpdate = async (id, verificationToken, verify) => {
  return await User.findByIdAndUpdate(id, {
    verificationToken: "",
    verify: true,
  });
};

module.exports = verifyUpdate;
