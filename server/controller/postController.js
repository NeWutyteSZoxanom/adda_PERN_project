const { Post } = require("../models/models");
const ApiError = require("../Error/ApiError");

class PostController {
  async create(req, res) {
    const { userId, text, typeId } = req.body;
    const { img } = req.files;
  }



  
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 15;
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
}
module.exports = new PostController();
