const Router = require("express");
const router = new Router();
const CommentController = require("../controller/CommentController");

router.post("/", CommentController.create);
router.get("/", CommentController.getAll);

module.exports = router;
