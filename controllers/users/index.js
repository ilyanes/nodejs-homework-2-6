const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const changeSubscription = require("./changeSubscription");
const setAvatar = require("./setAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  changeSubscription,
  setAvatar,
  verifyEmail,
  resendVerifyEmail,
};
