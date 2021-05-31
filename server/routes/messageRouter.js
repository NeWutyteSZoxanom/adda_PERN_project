const Router = require("express");
const router = new Router();
const messageController = require("../controller/messageController");

router.post("/", messageController.create);
router.get("/:id", messageController.getChatRoom);

module.exports = router;
