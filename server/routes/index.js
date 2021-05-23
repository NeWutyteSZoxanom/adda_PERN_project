const Router = require("express");
const router = new Router();
const chatRouter = require("./chatRouter");
const commentRouter = require("./commentRouter");
const messageRouter = require("./messageRouter");
const postRouter = require("./postRouter");
const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/comment", commentRouter);
router.use("/message", messageRouter);
router.use("/chat", chatRouter);
router.use("/type", typeRouter);
module.exports = router;
