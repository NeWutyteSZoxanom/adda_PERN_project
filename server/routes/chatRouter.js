const Router = require("express");
const router = new Router();
const ChatController = require("../controller/ChatController");

// router.post("/");
router.get("/", ChatController.getAll);
router.get("/:id", ChatController.getOneChat);

module.exports = router;
