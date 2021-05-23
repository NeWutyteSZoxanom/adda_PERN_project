const Router = require("express");
const router = new Router();
const PostController = require("../controller/PostController");

router.post("/", PostController.create);
router.get("/", PostController.getAll);
router.get("/:id");

module.exports = router;
