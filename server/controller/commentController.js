const { Comment } = require("../models/models");
const ApiError = require("../Error/ApiError");

class CommentController {
  async create(req, res) {
    const { text } = req.body;
    const comment = await Comment.create({ text });

    return res.json(comment);
  }
  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}
module.exports = new CommentController();
