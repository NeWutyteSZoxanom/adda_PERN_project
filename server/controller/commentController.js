const { Comment } = require("../models/models");
const ApiError = require("../Error/ApiError");

class CommentController {
  async create(req, res) {
    const { userId, text, postId } = req.body;
    const comment = await Comment.create({ userId, text, postId });

    return res.json(comment);
  }
  async getAll(req, res, next) {
    const { postId } = req.body;
    const types = await Type.findAll({ where: { postId } });

    return res.json(types);
    // } catch (e) {
    //   return next(ApiError.badRequest("Комментарие пока нет"));
    // }
  }
}
module.exports = new CommentController();
