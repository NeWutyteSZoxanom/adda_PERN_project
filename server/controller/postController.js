const { Post, Comment } = require("../models/models");
const ApiError = require("../Error/ApiError");
const uuid = require("uuid");
const path = require("path");

class PostController {
  async create(req, res, next) {
    try {
      let { userId, text, typeId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const post = await Post.create({
        userId,
        text,
        typeId,
        img: fileName,
      });
      // const comment = await Comment.create({ postId: post.id });
      return res.json(post);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 3;
    let offset = page * limit - limit;

    let posts;
    if (!typeId) {
      posts = await Post.findAndCountAll({ limit, offset });
    }

    if (typeId) {
      posts = await Post.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    return res.json(posts);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const comments = await Comment.findAll({ where: { postId: id } });

    // const comments = await Post.findOne({
    //   where: { id },
    //   include: [{ model: Comment, as: "comment" }],
    // });
    return res.json(comments);
  }
}
module.exports = new PostController();
