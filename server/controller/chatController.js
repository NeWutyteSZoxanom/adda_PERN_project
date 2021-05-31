const { User, Chat, Chat_user } = require("../models/models");
const ApiError = require("../Error/ApiError");

class ChatController {
  // async create(req, res) {
  //   const { userId, text, postId } = req.body;
  //   const comment = await Comment.create({ userId, text, postId });

  //   return res.json(comment);
  // }
  async getAll(req, res) {
    const chats = await Chat.findAll();
    return res.json(chats);
  }

  async getOneChat(req, res) {
    const { id } = req.params;
    const chatroom = await Chat.findOne({
      where: { id },
    });
    return res.json(chatroom);
  }
}
module.exports = new ChatController();
