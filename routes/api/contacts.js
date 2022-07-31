const express = require("express");

const ctrl = require("../../controllers/contacts");

const auth = require("../../middleware/auth");

const ctrlWrapper = require("../../middleware/ctrlWrapper");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.delete("/:id", auth, ctrlWrapper(ctrl.removeById));

router.put("/:id", auth, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", auth, ctrlWrapper(ctrl.updateFavorite));

module.exports = router;
