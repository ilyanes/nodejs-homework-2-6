const express = require("express");
const ctrl = require("../../controllers/users");
const auth = require("../../middleware/auth");
const authJoiValidate = require("../../middleware/auth/authJoiValidate");
const ctrlWrapper = require("../../middleware/ctrlWrapper");
const upload = require("../../middleware/upload");
const userJoiSubValid = require("../../middleware/userJoiSubValid");
const verifyJoiEmail = require("../../middleware/verifyJoiEmail");
const router = express.Router();

router.post("/signup", authJoiValidate, ctrlWrapper(ctrl.signup));
router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post("/verify", verifyJoiEmail, ctrlWrapper(ctrl.resendVerifyEmail));

router.post("/login", authJoiValidate, ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/", auth, userJoiSubValid, ctrlWrapper(ctrl.changeSubscription));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.setAvatar)
);

module.exports = router;
