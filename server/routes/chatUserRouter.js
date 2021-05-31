const Router = require("express");
const router = new Router();
const chatUserController = require("../controller/chatUserController");

router.post("/", chatUserController.create);

module.exports = router;
