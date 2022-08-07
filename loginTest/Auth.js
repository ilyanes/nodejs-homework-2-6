const { login, signup, logout } = require("../controllers/users");

class Auth {
  async register(req, res) {
    const { email, password } = req.body;
    const newUser = await signup(email, password);

    return res
      .status(201)
      .json({ status: "success", code: 201, data: newUser });
  }

  async signin(req, res) {
    const { email, password } = req.body;
    const user = await login(email, password);

    res.json({
      status: "success",
      data: {
        token: user.token,
        email: user.email,
        subscription: user.subscription,
        avatarURL: user.avatarURL,
      },
    });
  }

  async signout(req, res) {
    const { id } = req.user;
    await logout(id);

    res.status(204).json({ message: "You are loged out!" });
  }
}

module.exports = Auth;
